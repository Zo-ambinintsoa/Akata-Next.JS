import { useRouter } from 'next/router';
import { useState , useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Row , Form ,Col , Button, InputGroup} from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from "formik";
import { Link } from 'components';
import { ProjectService, alertService } from 'services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faWindowClose , faCalendarAlt , faSignature , faUserAlt, faRedoAlt , faClock} from '@fortawesome/free-solid-svg-icons'
export default function Project(props) {

  const project = props?.project;
  const isAddMode = !project
  ;
  const initialValues = {
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: ''
};

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last Name is required'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    role: Yup.string()
        .required('Role is required'),
    password: Yup.string()
        .concat(isAddMode ? Yup.string().required('Password is required') : null)
        .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
        .when('password', (password, schema) => {
            if (password || isAddMode) return schema.required('Confirm Password is required');
        })
        .oneOf([Yup.ref('password')], 'Passwords must match')
});

function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();
    isAddMode
        ?createUser(fields, setSubmitting)
        :updateUser(id, fields, setSubmitting);
    
}

function createUser(fields, setSubmitting) {
    userService.create(fields)
        .then(() => {
            alertService.success('User added', { keepAfterRouteChange: true });
            history.push('.');
        })
        .catch(() => {
            setSubmitting(false);
            alertService.error(error);
        });
}

function updateUser(id, fields, setSubmitting) {
    userService.update(id, fields)
        .then(() => {
            alertService.success('User updated', { keepAfterRouteChange: true });
            history.push('..');
        })
        .catch(error => {
            setSubmitting(false);
            alertService.error(error);
        });
}

return (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched, isSubmitting, setFieldValue }) => {
          const [user, setUser] = useState({});
          const [showPassword, setShowPassword] = useState(false);

          useEffect(() => {
              if (!isAddMode) {
                  // get user and set form fields
                  userService.getById(id).then(user => {
                      const fields = ['title', 'firstName', 'lastName', 'email', 'role'];
                      fields.forEach(field => setFieldValue(field, user[field], false));
                      setUser(user);
                  });
              }
          }, []);

          return (
              <Form>
                  <h1>{isAddMode ? 'Add User' : 'Edit User'}</h1>

                  <hr/>
                  <Row>
                      <Form.Group as={Col}>
                          <Form.Label>Title</Form.Label>
                          <Field name="title" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                              <option value=""></option>
                              <option value="Mr">Mr</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Miss">Miss</option>
                              <option value="Ms">Ms</option>
                          </Field>
                          <ErrorMessage name="title" component="div" className="invalid-feedback" />
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Label>First Name</Form.Label>
                          <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                          <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Label>Last Name</Form.Label>
                          <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                          <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col}>
                          <Form.Label>
                              Password
                          </Form.Label>
                          <Field name="password" as="textarea" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col}>
                          <Form.Label>Email</Form.Label>
                          <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Label>Role</Form.Label>
                          <Field name="role" as="select" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')}>
                              <option value=""></option>
                              <option value="User">User</option>
                              <option value="Admin">Admin</option>
                          </Field>
                          <ErrorMessage name="role" component="div" className="invalid-feedback" />
                      </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" id="formGridButton">
                  <Row>
                    <Col>
                    <Button  type="submit" disabled={isSubmitting} className="btn mr-2" variant="outline-warning">
                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                      Submit  <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                    </Col>
                    <Col>
                    <Link href="/project" className="btn btn-outline-danger">Cancel <FontAwesomeIcon icon={faWindowClose} /></Link>
                    </Col>
                    
                  </Row>
                  </Form.Group>
              </Form>
          );
      }}
  </Formik>
  
  )


    // return (
    //     <>
    //   <Formik
    //   validationSchema={schema}
    //   // onSubmit = {async (values, { resetForm }) => {
    //   //   await onSubmit(data);
    //   //   resetForm();
    //   // }}
    //   onSubmit = {onSubmit}
    //   initialValues={initialValues}
    // >
    //   {({
    //     handleSubmit,
    //     handleChange,
    //     values,
    //     errors,
    //   }) => (
    //     <Form noValidate onSubmit={handleSubmit}>
    //       <Row className="mb-3">
    //         <Form.Group as={Col} md="6" controlId="validationFormik01">
    //           <Form.Label>Name</Form.Label>
    //           <InputGroup hasValidation>
    //           <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faSignature} /></InputGroup.Text>
    //           <Form.Control
    //             type="text"
    //             name="name"
    //             // value={values.name}
    //             // onChange={handleChange}
    //             isInvalid={!!errors.name}
    //           />
    //           <Form.Control.Feedback type="invalid" >{errors.name}</Form.Control.Feedback>
    //           </InputGroup>
    //         </Form.Group>
    //         <Form.Group as={Col} md="6" controlId="validationFormik02">
    //           <Form.Label>Chef de Projet</Form.Label>
    //           <InputGroup hasValidation>
    //           <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faUserAlt} /></InputGroup.Text>
    //                 <select name="owner"  className={`form-control ${errors.owner ? 'is-invalid' : ''}`}>
    //                     <option value="">Choisisser un chef de projet ici</option>
    //                     <option value="User">User</option>
    //                     <option value="Admin">Admin</option>
    //                 </select>
    //                 <Form.Control.Feedback type="invalid" >{errors.owner}</Form.Control.Feedback>
    //           </InputGroup>
    //         </Form.Group>
    //       </Row>
    //       <Row className="mb-3">
    //         <Form.Group as={Col}  controlId="validationFormik03">
    //           <Form.Label>Description</Form.Label>
    //           <Form.Control
    //             as="textarea"
    //             placeholder="Description"
    //             name="description"
    //             // value={values.description}
    //             // onChange={handleChange}
    //             isInvalid={!!errors.description}
    //           />

    //           <Form.Control.Feedback type="invalid">
    //             {errors.description}
    //           </Form.Control.Feedback>
    //         </Form.Group>
    //       </Row>

    //       <Row>
    //       <Form.Group as={Col} md="4" controlId="validationFormik02">
    //           <Form.Label>Status du projet</Form.Label>
    //           <InputGroup hasValidation>
    //           <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faClock} /></InputGroup.Text>
    //                 <select name="state"  className={`form-control ${errors.state ? 'is-invalid' : ''}`}>
    //                     <option value="">Choisisser la Status du projet ici</option>
    //                     <option value="User">User</option>
    //                     <option value="Admin">Admin</option>
    //                 </select>
    //                 <Form.Control.Feedback type="invalid" >{errors.state}</Form.Control.Feedback>
    //           </InputGroup>
    //         </Form.Group>
    //       <Form.Group as={Col} md="4" controlId="validationFormikUsername">
    //           <Form.Label>Debut Estimer du projet</Form.Label>
    //           <InputGroup hasValidation>
    //             <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
    //             <Form.Control
    //               type="date"
    //               // placeholder="Debut estimer du projet"
    //               aria-describedby="inputGroupPrepend"
    //               name="estimated_start"
    //               // value={values.estimated_start}
    //               // onChange={handleChange}
    //               isInvalid={!!errors.estimated_start}
    //             />
    //             <Form.Control.Feedback type="invalid">
    //               {errors.estimated_start}
    //             </Form.Control.Feedback>
    //           </InputGroup>
    //         </Form.Group>
    //       <Form.Group as={Col} md="4" controlId="validationFormikUsername">
    //           <Form.Label>Fin estimer du projet</Form.Label>
    //           <InputGroup hasValidation>
    //             <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
    //             <Form.Control
    //               type="date"
    //               // placeholder="Fin estimer du projet"
    //               aria-describedby="inputGroupPrepend"
    //               name="estimated_end"
    //               // value={values.estimated_end}
    //               // onChange={handleChange}
    //               isInvalid={!!errors.estimated_end}
    //             />
    //             <Form.Control.Feedback type="invalid">
    //               {errors.estimated_end}
    //             </Form.Control.Feedback>
    //           </InputGroup>
    //         </Form.Group>
    //       </Row>
    //       <Row>
    //                 <Col>
    //                 <Button  type="submit" 
    //                 // disabled={formState.isSubmitting} 
    //                 className="btn mr-2" variant="outline-warning">
    //                 {
    //                 // formState.isSubmitting 
    //                 // && 
    //                 <span className="spinner-border spinner-border-sm mr-1"></span>}
    //                   Submit  <FontAwesomeIcon icon={faPaperPlane} />
    //                 </Button>
    //                 </Col>
    //                 <Col>
    //                 <Button 
    //                       // onClick={() => reset(formOptions.defaultValues)} 
    //                       type="button" 
    //                       // disabled={formState.isSubmitting} 
    //                       className="btn " 
    //                       variant="outline-info">
    //                   Reset <FontAwesomeIcon icon={faRedoAlt} />
    //                 </Button>
    //                 </Col>
    //                 <Col>
    //                 <Link href="/project" className="btn btn-outline-danger">Cancel <FontAwesomeIcon icon={faWindowClose} /></Link>
    //                 </Col>
                    
    //               </Row>
    //     </Form>
    //   )}
    // </Formik>
    //     </>
    // );
}
