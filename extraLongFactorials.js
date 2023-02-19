const extraLongFactorials = (n) =>
  BigInt([...Array(n).keys()].map((_, key) => key + 1).reduce((accum, curr) => accum * curr, 1));

const result = extraLongFactorials(25);

result;

//https://talent.remotebase.com/?referral=fVjnAop3DcsVuXrcWzzyDi

// Introduction for a front end engineer role
// Path: introduction.js
const introduction = (name, email, phone, skills) => {
  const intro = `Hello, my name is ${name}. I can be reached at ${email} or ${phone}. I have experience with ${skills.join(
    ', '
  )}.`;
  return intro;
};
