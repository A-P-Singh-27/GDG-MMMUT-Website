// import styled from "styled-components";

// export const Navbar = styled.nav`
//   font-family: 'Lexend', sans-serif;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1rem;
//   background-color: #FFFFFF;
//   z-index: 200;

//   a {
//     font-size: 1.1rem;
//     font-weight: 300;
//     color: #222;
//     text-decoration: none;
//     margin: 0 1.5rem; /* Default gap for nav links */
//     transition: color 0.3s;

//     &:hover {
//       color: #0F9D58; /* Add hover effect for better interaction */
//     }

//     @media (max-width: 768px) {
//       margin: 0 1rem; /* Reduced gap on smaller screens */
//     }

//     @media (max-width: 640px) {
//       margin: 0.5rem; /* Even smaller gap on extra-small screens */
//       font-size: 1rem; /* Adjust font size for better readability */
//     }
//   }
// `;


import styled from "styled-components";

export const Navbar = styled.nav`
  font-family: 'Lexend', sans-serif;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 13% 40% 12%; 
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 300;
  background-color: #FFFFFF;
  z-index: 200;
  gap: 20px; /* Default gap for above md screen */
  
  /* For smaller screens below md */
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr; /* Make the navbar items stack evenly */
    gap: 10px; /* Reduce the gap to 10px on smaller screens */
  }
`;
