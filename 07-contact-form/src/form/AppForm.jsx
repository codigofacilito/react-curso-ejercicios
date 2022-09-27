import { Formik, Form, Field, ErrorMessage } from 'formik';

function AppForm(){
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if(!values.email) {
          errors.email = 'Required';
        } else if(
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        let formData = new FormData();

        for (var key in values) {
          formData.append(key, values[key]);
        }
        fetch("https://formspree.io/f/mqkjpgqa", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          setSubmitting(false);
          alert("Gracias por contactarme");
        });

      }}
    >
      {({ isSubmitting }) => (
        <Form className="form" >
          <div>
            <label htmlFor="name">Tu nombre:</label>
            <Field type="text" name="name"  />
            <ErrorMessage name="name" component="div" />
          </div>
          
          <div>
            <label htmlFor="name">Tu correo:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <Field component="textarea" name="message" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default AppForm;