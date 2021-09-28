import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Row , Form , Col , Button, InputGroup} from 'react-bootstrap';
import { Formik} from 'Formik';
import { Link } from 'components';
import { ProjectService, alertService } from 'services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faWindowClose , faCalendarAlt , faSignature , faUserAlt, faRedoAlt , faClock} from '@fortawesome/free-solid-svg-icons'
export default function Project(props) {


  const schema = Yup.object().shape({
    title: Yup.string().required(),
    owner: Yup.string().required(),
    estimated_start: Yup.date().required(),
    description: Yup.string().required(),
    estimated_end: Yup.date().required(),
    state: Yup.string().required(),
  });



    return (
        <>
      <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        title: '',
        owner: '',
        estimated_start: '',
        description: '',
        estimated_end: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>title</Form.Label>
              <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faSignature} /></InputGroup.Text>
              <Form.Control
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid" >{errors.title}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label>Chef de Projet</Form.Label>
              <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faUserAlt} /></InputGroup.Text>
                    <select name="executor" onChange={handleChange} className={`form-control ${errors.executor ? 'is-invalid' : ''}`}>
                        <option value="">Choisisser un chef de projet ici</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <Form.Control.Feedback type="invalid" >{errors.executor}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}  controlId="validationFormik03">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                isInvalid={!!errors.description}
              />

              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
          <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Status du projet</Form.Label>
              <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faClock} /></InputGroup.Text>
                    <select name="state" onChange={handleChange} className={`form-control ${errors.state ? 'is-invalid' : ''}`}>
                        <option value="">Choisisser la Status du projet ici</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <Form.Control.Feedback type="invalid" >{errors.state}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Debut Estimer du projet</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                <Form.Control
                  type="date"
                  // placeholder="Debut estimer du projet"
                  aria-describedby="inputGroupPrepend"
                  name="estimated_start"
                  value={values.estimated_start}
                  onChange={handleChange}
                  isInvalid={!!errors.estimated_start}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.estimated_start}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Fin estimer du projet</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                <Form.Control
                  type="date"
                  // placeholder="Fin estimer du projet"
                  aria-describedby="inputGroupPrepend"
                  name="estimated_end"
                  value={values.estimated_end}
                  onChange={handleChange}
                  isInvalid={!!errors.estimated_end}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.estimated_end}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row>
                    <Col>
                    <Button  type="submit" 
                    // disabled={formState.isSubmitting} 
                    className="btn mr-2" variant="outline-warning">
                    {
                    // formState.isSubmitting 
                    // && 
                    <span className="spinner-border spinner-border-sm mr-1"></span>}
                      Submit  <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                    </Col>
                    <Col>
                    <Button 
                          // onClick={() => reset(formOptions.defaultValues)} 
                          type="button" 
                          // disabled={formState.isSubmitting} 
                          className="btn " 
                          variant="outline-info">
                      Reset <FontAwesomeIcon icon={faRedoAlt} />
                    </Button>
                    </Col>
                    <Col>
                    <Link href="/project" className="btn btn-outline-danger">Cancel <FontAwesomeIcon icon={faWindowClose} /></Link>
                    </Col>
                    
                  </Row>
        </Form>
      )}
    </Formik>
        </>
    );
}
