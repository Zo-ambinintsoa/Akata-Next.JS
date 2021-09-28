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
export default function User(props) {

    const user = props?.user;
    const profiles = props?.profiles.profiles;
    const rows = [];
    const isAddMode = !user;

        var i ;
    for (   i = 0 ; i < profiles.length ; i ++  )
    {
      var Pid = profiles[i].id ;
       var Pname = profiles[i].name;
        rows.push(<option key={`${i}`} value= {`${Pid}`}> {`${Pname}`}</option>);
            }
  const initialValues = {
    name: '',
    profile: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    lastName: Yup.string()
        .required('Last Name is required'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    profile: Yup.string()
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
    // userService.create(fields)
    //     .then(() => {
    //         alertService.success('User added', { keepAfterRouteChange: true });
    //         history.push('.');
    //     })
    //     .catch(() => {
    //         setSubmitting(false);
    //         alertService.error(error);
    //     });

    console.log(fields)
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

          useEffect(() => {
              if (!isAddMode) {
                  // get user and set form fields
                  userService.getById(id).then(user => {
                      const fields = ['name', 'profile', 'email', 'role'];
                      fields.forEach(field => setFieldValue(field, user[field], false));
                      setUser(user);
                  });
              }
          }, []);

          return (
              <Form>
                  <h2>{isAddMode ? 'Add User' : 'Edit User'}</h2>

                  <hr/>
                  <Row>
                      <Form.Group as={Col}>
                          <Form.Label>Name</Form.Label>
                          <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                          <ErrorMessage name="name" component="div" className="invalid-feedback" />
                      </Form.Group>
                      </Row>
                      <Row>
                      <Form.Group as={Col} md="8">
                          <Form.Label>Email</Form.Label>
                          <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Label>Role</Form.Label>
                          <Field name="profile" as="select" className={'form-control' + (errors.profile && touched.profile ? ' is-invalid' : '')}>
                              <option value=""></option>
                              {rows}
                          </Field>
                          <ErrorMessage name="profile" component="div" className="invalid-feedback" />
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col}>
                          <Form.Label>
                              Password
                          </Form.Label>
                          <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Label>
                              Confirm Password
                          </Form.Label>
                          <Field name="confirmPassword" type="confirmPassword" className={'form-control' + (errors.password && touched.confirmPassword ? ' is-invalid' : '')} />
                          <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                      </Form.Group>
                  </Row>
                  <Row>
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
    }








// import { useRouter } from 'next/router';
// import { useState , } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Select } from 'react-select'
// import * as Yup from 'yup';
// import { Row , Form , Col , Button} from 'react-bootstrap';
// import { Link } from 'components';
// import { userService, alertService } from 'services';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaperPlane, faWindowClose , faRedoAlt} from '@fortawesome/free-solid-svg-icons'
// export default function User(props) {
//     const user = props?.user;
//     const profiles = props?.profiles;
//     const rows = [];
//     const isAddMode = !user;
//     const router = useRouter();
//     var i ;
//     for (   i = 0 ; i < profiles.length ; i ++  )
//     {
//       var Pid = profiles[i].id ;
//        var Pname = profiles[i].name;
//         rows[i] = Pid;
//             }
//     const validationSchema = Yup.object().shape({
//         name: Yup.string()
//             .required('Last Name is required'),
//         email: Yup.string()
//             .email('Email is invalid')
//             .required('Email is required'),
//         profile: Yup.string()
//             .required('Profile is required').oneOf(rows),
//         password: Yup.string()
//             .transform(x => x === '' ? undefined : x)
//             .concat(isAddMode ? Yup.string().required('Password is required') : null)
//             .min(6, 'Password must be at least 6 characters'),
//         confirmPassword: Yup.string()
//             .transform(x => x === '' ? undefined : x)
//             .when('password', (password, schema) => {
//                 if (password || isAddMode) return schema.required('Confirm Password is required');
//             })
//             .oneOf([Yup.ref('password')], 'Passwords must match')
//     });
//     const formOptions = { resolver: yupResolver(validationSchema) };

//     // set default form values if in edit mode
//     if (!isAddMode) {
//         const { password, confirmPassword, ...defaultValues } = user.user;
//         formOptions.defaultValues = defaultValues;
//     } 

//     // get functions to build form with useForm() hook
//     const { register, handleSubmit, reset, formState } = useForm(formOptions);
//     const { errors } = formState;

//     function onSubmit(data) {
//         return isAddMode
//             ? createUser(data)
//             : updateUser(user.user.id, data);
//     }

//     function createUser(data) {
//       var confPassword = data.password;
//       delete data.password;
//       delete data.confirmPassword;
//       data.confPassword = confPassword;
//       console.log(data);
//         return userService.create(data)
//             .then(() => {
//                 alertService.success('User added', { keepAfterRouteChange: true });
//                 router.push('.');
//             })
//             .catch(alertService.error);
//     }

//     function updateUser(id, data) {
//       var profile = data.st;
//       // data.profile = profile.name
//             console.log(data);
//         // return userService.update(id, data)
//             // .then(() => {
//             //     alertService.success('User updated', { keepAfterRouteChange: true });
//             //     router.push('..');
//             // })
//             // .catch(alertService.error);
//     }


//     return (
//         <>
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Group className="mb-3" id="formGridCheckbox">
//                   <Row>
//                     <Col>
//                     <Form.Label>Name</Form.Label>
//                       <input type='text' name= 'name'  {...register('name')} className={` form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Enter you name here" />
//                       <div className="invalid-feedback">{errors.name?.message}</div>
//                     </Col>
//                   </Row>
//                   </Form.Group>
//                   <Form.Group className="mb-3" id="formGridCheckbox">
//                   <Row>
//                     <Col className=" col-7">
//                     <Form.Label>Email address</Form.Label>
//                       <Form.Control name= 'email'  type = 'email' {...register('email')} className={`${errors.email ? 'is-invalid' : ''}`} placeholder="email here " />
//                       <div className="invalid-feedback">{errors.email?.message}</div>
//                     </Col>
//                     <Col>
//                       <Form.Label>Role :
//                       {!isAddMode && 
//                                   <em> cette utilisateur est un {user.user.profile.name} </em> 
//                         }

//                         </Form.Label>
                      
//                                 <Form.Control as= 'select' name='st' defaultValue="Choose...">
//                                 <option>Choose...</option>
//                                     {profiles && profiles.map( profile => 
//                                 <option key={profile.id} value = {` ${profile.id}` }>{profile.name}</option>
//                                     )}
//                               </Form.Control>  

//                       <div className="invalid-feedback">{errors.profile?.message}</div>
//                     </Col>
//                   </Row>
//                   </Form.Group>
//                   {isAddMode && 
//                   <Form.Group className="mb-3" id="formGridCheckbox">
//                   <Row>
//                     <Col >
//                     <Form.Label>Password
//                     </Form.Label>
//                       <Form.Control name="password" type="password" {...register('password')} className={` ${errors.password ? 'is-invalid' : ''}`} />
//                       <div className="invalid-feedback">{errors.password?.message}</div>
//                     </Col>
//                     <Col>
//                     <Form.Label>Confirm Password</Form.Label>
//                     <Form.Control name="confirmPassword" type="password" {...register('confirmPassword')} className={` ${errors.confirmPassword ? 'is-invalid' : ''}`} />
//                     <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
//                     </Col>
//                   </Row>
//                   </Form.Group>

// }
//                   <Form.Group className="mb-3" id="formGridButton">
//                   <Row>
//                     <Col>
//                     <Button  type="submit" disabled={formState.isSubmitting} className="btn mr-2" variant="outline-warning">
//                     {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
//                       Submit  <FontAwesomeIcon icon={faPaperPlane} />
//                     </Button>
//                     </Col>
//                     <Col>
//                     <Button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn " variant="outline-info">
//                       Reset <FontAwesomeIcon icon={faRedoAlt} />
//                     </Button>
//                     </Col>
//                     <Col>
//                     <Link href="/user" className="btn btn-outline-danger">Cancel <FontAwesomeIcon icon={faWindowClose} /></Link>
//                     </Col>
                    
//                   </Row>
//                   </Form.Group>
//                 </Form>
//         </>
//     );
// }
