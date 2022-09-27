import { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ListContext } from '../contexts/ListContext';

function NotesForm(){
  const { add } = useContext(ListContext);

  return(
    <Formik
      initialValues={{ title: '', body: '' }}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        }
        if (!values.body) {
          errors.body = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        add(values);
        setSubmitting(false);
        // Clear form
        values.title = '';
        values.body = '';
      }}
    >
      {({ isSubmitting }) => (
        <Form className='form'>
          <div>
            <label htmlFor="title">Título</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="body">Qué quieres guardar</label>
            <Field as="textarea" name="body" />
            <ErrorMessage name="body" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Guardar nota
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default NotesForm;