import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'react-feather'
import { Text } from '../text/Text'
import { FormGroup } from '../formGroup/index'
import { Card } from '../card/index'
import { DangerButton } from '../button/index'
import { Form } from 'react-bootstrap'
import {isValidEmail} from '../../utils/_heplers'


export const RegistrationForm = (props) => {
    const { handleSubmit, onSubmit, errors, isLogging, register } = props;
    const [show, setShow] = useState(false);

    return (
        <Card.Simple className="shadow-none border border-danger p-4">
            <Card.Header className="bg-white px-0 text-center border-0">
                <Text className="fs-20 font-weight-bolder mb-1">Sign In</Text>
                <div>
                    Already Have an account?
                    <Link to="/">
                        <span className="fs-16 text-bold text-dark "> Login</span>
                    </Link>
                </div>
            </Card.Header>
            <Card.Body className="px-0">
                <form onSubmit={handleSubmit(onSubmit)}>


                    {/* User Name */}
                    <FormGroup>
                        {errors.name && errors.name.message ?
                            <Text className="text-danger fs-13 mb-1">{errors.name && errors.name.message}</Text> :
                            <Text className="text-capitalize fs-13 mb-1 text-danger text-bold"> User Name</Text>
                        }

                        <input
                            type="text"
                            className={errors.name ? "form-control shadow-none error" : "form-control border border-danger shadow-none"}
                            placeholder="User Name"
                            {...register("name", { required: "Username is required" })}
                        />
                    </FormGroup>


                    {/* Sur Name */}
                    <FormGroup>
                        {errors.surname && errors.surname.message ?
                            <Text className="text-danger fs-13 mb-1">{errors.surname && errors.surname.message}</Text> :
                            <Text className="text-capitalize fs-13 mb-1 text-danger text-bold">Sur Name</Text>
                        }

                        <input
                            type="text"
                            className={errors.surname ? "form-control shadow-none error" : "form-control border border-danger shadow-none"}
                            placeholder="Sur Name"
                            {...register("surname", { required: "Surname is required" })}
                        />
                    </FormGroup>

                    {/* E-mail */}
                    <FormGroup>
                        {errors.email && errors.email.message ?
                            <Text className="text-danger fs-13 mb-1">{errors.email && errors.email.message}</Text> :
                            <Text className="text-capitalize fs-13 mb-1 text-danger text-bold">E-mail</Text>
                        }

                        <input
                            type="text"
                            className={errors.email ? "form-control shadow-none error" : "form-control border border-danger shadow-none"}
                            placeholder="example@gmail.com"
                            {...register("email", {
                                pattern: {
                                    value: isValidEmail(),
                                    message: "Invalid e-mail address"
                                }
                            })}
                        />
                    </FormGroup>

                    {/* Password */}
                    <FormGroup>
                        {errors.password && errors.password.message ?
                            <Text className="text-danger fs-13 mb-1">{errors.password && errors.password.message}</Text> :
                            <Text className="text-capitalize fs-13 mb-1 text-danger text-bold">Password</Text>
                        }

                        <div style={{ position: "relative" }}>
                            <input
                                type={show ? "text " : "password"}
                                placeholder="*****"
                                className={errors.password ? "form-control shadow-none error" : "form-control border border-danger shadow-none"}
                                {...register("password", { required: "Password is required" })}
                            />

                            {show ?
                                <Eye
                                    size={16}
                                    style={{
                                        cursor: "pointer",
                                        position: "absolute",
                                        top: 13,
                                        right: 13
                                    }}
                                    onClick={() => setShow(!show)}
                                />
                                :
                                <EyeOff
                                    size={16}
                                    style={{
                                        cursor: "pointer",
                                        position: "absolute",
                                        top: 13,
                                        right: 13
                                    }}
                                    onClick={() => setShow(!show)}
                                />
                            }
                        </div>
                    </FormGroup>

                    {/* check box */}
                    <Form.Check
                        type="checkbox"
                        name="checkboxvx"
                        label={"Sign Up for email address"}
                        style={{ fontSize: 13, marginBottom: 15, cursor: "pointer", borderBlockColor: 'red' }}
                        checked={props.subscribe}
                        onChange={() => props.setSubscribe(!props.subscribe)}
                    />

                    {/* Submit button */}
                    <DangerButton
                        type="submit"
                        className="w-100"
                        disabled={isLogging}
                    >
                        {isLogging ? "Signing In ..." : "Sign In"}
                    </DangerButton>

                </form>
            </Card.Body>
        </Card.Simple>
    )
}
