// import EmailAddress from "../../../../types/email-address";
// import {NonEmptyString} from "../../../../types/NonEmptyString";
// import Password from "./password";
//
//
// export class ContactUsModel {
//   public email;
//   public password;
//   public emailError;
//   public passwordError;
//
//   newLogin() {
//     try {
//       new EmailAddress(new NonEmptyString(this.email, 'Email is require.'));
//       new EmailAddress(this.email);
//       new Password(new NonEmptyString(this.password, 'Password is require.'));
//       new Password(this.password);
//     }
//     catch (e) {
//       if (e === 'Email is required.' || e=== 'Please enter valid Email Address') {
//         this.emailError = e;
//       }
//         if (e === `Password Incorrect` || e=== 'Password is required') {
//           this.passwordError = e;
//         }
//       }
//     }
// }
