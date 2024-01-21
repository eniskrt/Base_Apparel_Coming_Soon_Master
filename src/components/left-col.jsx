import React from 'react'
import { Button, Col, Container, Form, Image } from 'react-bootstrap'
import { IoIosArrowForward } from "react-icons/io";
import logo from "../img/logo.svg"
import * as Yup from "yup"
import { useFormik } from 'formik';

const LeftCol = () => {

    const initialValues = {
        email:""
    }

    const validationSchema = Yup.object({
        email:Yup
            .string()
            .email("Please provide a valid email")
            .required("Email is required")
    })

    const onSubmit = ()=>{
        console.log("Use formik")
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

  return (
    <Col md={7} className='left-col'>
      <Container>
        <Image src={logo} alt='logo' className='logo'/>
        <h1>
            <span>We're</span><br />
            coming <br />
            soon 
        </h1>
        <p>Hello fellow shopers! We're currently building our new <br />fashion store. Add your email below to stay up-to-date with <br /> announcments and launch details.
        </p>
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group>
                <Form.Control
                    className='input'
                    type='email'
                    placeholder='Email Address'
                    {...formik.getFieldProps("email")}
                    isInvalid={formik.touched.email && formik.errors.email}
                    />
                <Form.Control.Feedback type='invalid' className='feedback'>
                    {formik.errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Button type='submit'>
                <IoIosArrowForward />
            </Button>
        </Form>
      </Container>
    </Col>
  )
}

export default LeftCol
