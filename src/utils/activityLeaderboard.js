// utils/activityLeaderboard.js

const ATTENDANCE_XP = 30;

const WATCH_75_XP = 50;
const WATCH_95_XP = 60;

const ATTENDANCE_LIMIT_MINUTES = 10;

// ---------------------------------------------------
// get difference between two timestamps in minutes
// ---------------------------------------------------

const getMinutesDifference = (startTime, endTime) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  return Math.floor((end - start) / (1000 * 60));
};

// ---------------------------------------------------
// group same students together
// because zoom creates multiple entries
// when students reconnect
// ---------------------------------------------------

const groupParticipants = (participants) => {
  const groupedStudents = {};

  participants.forEach((participant) => {
    const email = participant.user_email;

    // create new student
    if (!groupedStudents[email]) {
      groupedStudents[email] = {
        name: participant.name,
        email: participant.user_email,

        totalDuration: 0,

        firstJoinTime: participant.join_time,

        sessions: [],
      };
    }

    // add duration
    groupedStudents[email].totalDuration +=
      participant.duration;

    // store session
    groupedStudents[email].sessions.push({
      joinTime: participant.join_time,
      leaveTime: participant.leave_time,
      duration: participant.duration,
    });

    // update earliest join time
    const currentFirstJoin = new Date(
      groupedStudents[email].firstJoinTime
    );

    const newJoin = new Date(
      participant.join_time
    );

    if (newJoin < currentFirstJoin) {
      groupedStudents[email].firstJoinTime =
        participant.join_time;
    }
  });

  return Object.values(groupedStudents);
};

// ---------------------------------------------------
// attendance eligibility
// joined within first 10 mins
// ---------------------------------------------------

const isEligibleForAttendanceXP = (
  lectureStartTime,
  firstJoinTime
) => {
  const joinDelay = getMinutesDifference(
    lectureStartTime,
    firstJoinTime
  );

  return joinDelay <= ATTENDANCE_LIMIT_MINUTES;
};

// ---------------------------------------------------
// calculate watch percentage
// ---------------------------------------------------

const getWatchPercentage = (
  totalDuration,
  lectureDuration
) => {
  const cappedDuration = Math.min(
    totalDuration,
    lectureDuration
  );

  return (cappedDuration / lectureDuration) * 100;
};

// ---------------------------------------------------
// calculate xp for one student
// ---------------------------------------------------

const calculateXP = (
  student,
  lectureStartTime,
  lectureDuration
) => {
  let xp = 0;

  // attendance xp
  const attendanceEligible =
    isEligibleForAttendanceXP(
      lectureStartTime,
      student.firstJoinTime
    );

  if (attendanceEligible) {
    xp += ATTENDANCE_XP;
  }

  // watch percentage
  const watchPercentage = getWatchPercentage(
    student.totalDuration,
    lectureDuration
  );

  // watch xp
  if (watchPercentage >= 95) {
    xp += WATCH_95_XP;
  } else if (watchPercentage >= 75) {
    xp += WATCH_75_XP;
  }

  return {
    xp,

    attendanceEligible,

    watchPercentage: Math.floor(
      watchPercentage
    ),
  };
};

// ---------------------------------------------------
// build final leaderboard
// ---------------------------------------------------

export const buildLeaderboard = (
  zoomData
) => {
  const participants =
    zoomData.participants;

  const lectureDuration =
    zoomData.meeting.duration;

  const lectureStartTime =
    zoomData.meeting.start_time;

  // merge duplicate student entries
  const groupedStudents =
    groupParticipants(participants);

  // calculate xp for each student
  const leaderboard =
    groupedStudents.map((student) => {
      const result = calculateXP(
        student,
        lectureStartTime,
        lectureDuration
      );

      return {
        ...student,

        xp: result.xp,

        attendanceEligible:
          result.attendanceEligible,

        watchPercentage:
          result.watchPercentage,
      };
    });

  // sort by xp descending
  leaderboard.sort(
    (a, b) => b.xp - a.xp
  );

  // assign ranks
  const rankedLeaderboard =
    leaderboard.map((student, index) => ({
      ...student,
      rank: index + 1,
    }));

  return rankedLeaderboard;
};