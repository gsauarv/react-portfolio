import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your respected name !"),
  email: Yup.string()
    .email("Invalid email format !")
    .required("Please enter your email !"),
  subject: Yup.string().required("Please define the purpose of your message !"),
  message: Yup.string().required("Please enter some messages !"),
});
const onSubmit = (values, { res }) => {
  console.log("Field Values", values);
  values = initialValues;
};

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_r0mxe57",
      "template_1qha8oa",
      e.target,
      "user_7GTJIDZz9XCJupVrhXP1F"
    )
    .then(
      (result) => {
        console.log(result.text);
        onSubmit();
      },
      (error) => {
        console.log(error.text);
      }
    );
};
function Contact() {
  return (
    <div className="container">
      <div className="contactContainer">
        <div>
          <h2>Let's Work Together</h2>
          <p>Fill the form to send a message</p>
        </div>
        <div className="contactFormContainer">
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            <Form onSubmit={sendEmail}>
              <div className="form-control">
                <p>Full Name</p>
                <Field type="text" id="name" name="name" />

                <h6>
                  <ErrorMessage name="name" />
                </h6>
              </div>

              <div className="form-control">
                <p>Email address</p>
                <Field type="email" id="email" name="email"></Field>
                <h6>
                  <ErrorMessage name="email" />
                </h6>
              </div>

              <div className="form-control">
                <p>Subject</p>
                <Field type="text" id="subject" name="subject"></Field>
                <h6>
                  <ErrorMessage name="subject" />
                </h6>
              </div>

              <div className="form-control">
                <p>Message</p>
                <Field as="textarea" id="message" name="message"></Field>
                <h6>
                  <ErrorMessage name="message" />
                </h6>
              </div>
              <div className="form-control" k>
                <button type="submit">Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;
