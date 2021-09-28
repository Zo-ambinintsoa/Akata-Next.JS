import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Row , Form , Col , Button} from 'react-bootstrap';
import { Link } from 'components';
import { stService, alertService } from 'services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faWindowClose , faRedoAlt} from '@fortawesome/free-solid-svg-icons'
export default function St(props) {
    const st = props?.st;

    const rows = [];
    const isAddMode = !st;
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    var i ;
    for (   i = 0 ; i < profiles.length ;i ++  )
    {
        rows.push(<option key={i} value = {profiles[i].id}>{profiles[i].name}</option>);
            }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (!isAddMode) {
        const { password, confirmPassword, ...defaultValues } = st;
        formOptions.defaultValues = defaultValues;
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        return isAddMode
            ? createSt(data)
            : updateSt(st.id, data);
    }

    function createSt(data) {
      console.log(data);
        return stService.create(data)
            .then(() => {
                alertService.success('St added', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateSt(id, data) {
        return stService.update(id, data)
            .then(() => {
                alertService.success('St updated', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }


    return (
        <>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  </Form.Group>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                  <Row>
                    <Col className=" col-7">
                    <Form.Label>Email address</Form.Label>
                      <Form.Control name= 'email'  type = 'email' {...register('email')} className={`${errors.email ? 'is-invalid' : ''}`} placeholder="email here " />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </Col>
                    <Col>
                      <Form.Label>Role</Form.Label>
                      <Form.Control as='select'  name="profile" {...register('profile')} className={`${errors.profile ? 'is-invalid' : ''}`} >
                                <option value="">Chose Role Here</option>
                                        {rows}
                        </Form.Control> 
                      <div className="invalid-feedback">{errors.profile?.message}</div>
                    </Col>
                  </Row>
                  </Form.Group>
                  <Form.Group className="mb-3" id="formGridButton">
                  <Row>
                    <Col>
                    <Button  type="submit" disabled={formState.isSubmitting} className="btn mr-2" variant="outline-warning">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                      Submit  <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                    </Col>
                    <Col>
                    <Button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn " variant="outline-info">
                      Reset <FontAwesomeIcon icon={faRedoAlt} />
                    </Button>
                    </Col>
                    <Col>
                    <Link href="/st" className="btn btn-outline-danger">Cancel <FontAwesomeIcon icon={faWindowClose} /></Link>
                    </Col>
                    
                  </Row>
                  </Form.Group>
                </Form>
        </>
    );
}












{/* <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Code</Form.Label>
    <Form.Control placeholder="Enter Code Here" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>   
    <Form.Control placeholder="Enter Name here" />
</Form.Group>
<Button variant="primary" type="submit">
    Submit
</Button>
</Form>   */}