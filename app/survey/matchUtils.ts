// // Hardcoded existing users for matching
// export const existingUsers = [
//   {
//     id: "user_001",
//     name: "Khushboo",
//     preferences: [
//       "Quiet shared apartment",
//       "Reading and watching movies",
//       "Late night and flexible",
//       "Avoids confrontation",
//       "Clean and organized",
//     ],
//   },
//   {
//     id: "user_002",
//     name: "Ananya",
//     preferences: [
//       "Lively flat with friends",
//       "Partying and going out",
//       "Early to bed, early to rise",
//       "Open discussions",
//       "Messy but functional",
//     ],
//   },
//   {
//     id: "user_003",
//     name: "Sara",
//     preferences: [
//       "Quiet shared apartment",
//       "Reading and watching movies",
//       "Late night and flexible",
//       "Avoids confrontation",
//       "Clean and organized",
//     ],
//   },
// ];

// // Simple matching function
// export function findMatches(currentUser: any) {
//   return existingUsers
//     .map((user) => {
//       const score = user.preferences.reduce((acc, pref, i) => {
//         return acc + (pref === currentUser.preferences[i] ? 1 : 0);
//       }, 0);
//       return { ...user, matchScore: score };
//     })
//     .sort((a, b) => b.matchScore - a.matchScore);
// }



// matchUtils.ts

// Dataset of existing users
export const existingUsers = [
  {
    id: "u1",
    name: "Khushboo",
    preferences: [
      "Quiet shared apartment",
      "Reading and watching movies",
      "Late night and flexible",
      "Avoids confrontation",
      "Clean and organized",
    ],
  },
  {
    id: "u2",
    name: "Ananya",
    preferences: [
      "Lively flat with friends",
      "Partying and going out",
      "Early to bed, early to rise",
      "Open discussions",
      "Messy but functional",
    ],
  },
  {
    id: "u3",
    name: "Riya",
    preferences: [
      "Quiet shared apartment",
      "Spending time alone",
      "Late night and flexible",
      "Avoids confrontation",
      "Clean and organized",
    ],
  },
];

// Matching function: returns sorted matches
export function findMatches(currentUser: any) {
  return existingUsers
    .map((user) => {
      let score = 0;
      for (let i = 0; i < user.preferences.length; i++) {
        if (user.preferences[i] === currentUser.preferences[i]) {
          score++;
        }
      }
      return { ...user, matchScore: score };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}
