import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../text/Text'
import { FormGroup } from '../formGroup/index'
import { Card } from '../card/index'
import { DangerButton } from '../button/index'
import { isValidEmail } from '../../utils/_heplers'


export const ContactUsForm = (props) => {
    const { handleSubmit, onSubmit, errors, isLogging, register } = props;

    return (
        <Card.Simple className="shadow-none border border-danger p-4">
            <Card.Header className="bg-white px-0 text-center border-0">
                <Text className="fs-20 font-weight-bolder mb-1">Sign In</Text>
                <div>
                    Already Have an account?
                    <Link to="/login">
                        <span className="fs-16 text-bold text-dark "> Login</span>
                    </Link>
                </div>
            </Card.Header>
            <Card.Body className="px-0">
                <form onSubmit={handleSubmit(onSubmit)}>


                    {/* From */}
                    <FormGroup>
                        {errors.from && errors.from.message ?
                            <Text className="text-danger fs-13 mb-1">{errors.from && errors.from.message}</Text> :
                            <Text className="text-capitalize fs-13 mb-1 text-danger text-bold"> From</Text>
                        }

                        <input
                            type="text"
                            className={errors.from ? "form-control shadow-none error" : "form-control border border-danger shadow-none"}
                            placeholder="Email"
                            {...register("from", {
                                required: "Email is required",
                                pattern: {
                                    value: isValidEmail(),
                                    message: "Invalid e-mail address"
                                }
                            })}
                        />
                    </FormGroup>


                    {/* Subject*/}
                    <FormGroup>
                        {errors.subject && errors.subject.message ?
                            <Text className="text-danger fs-13 mb-1">{errors.subject && errors.subject.message}</Text> :
                            <Text className="text-capitalize fs-13 mb-1 text-danger text-bold">Subject</Text>
                        }

                        <input
                            type="text"
                            className={errors.subject ? "form-control shadow-none error" : "form-control border border-danger shadow-none"}
                            placeholder="Subject"
                            {...register("subject", { required: "Subject is required" })}
                        />
                    </FormGroup>

                    {/* Content */}
                    <FormGroup>
                        {errors.content && errors.content.message ?
                            <Text className="text-danger fs-13 mb-1">{errors.content && errors.content.message}</Text> :
                            <Text className="text-capitalize fs-13 mb-1 text-danger text-bold">Email</Text>
                        }

                        <textarea
                            type="text"
                            className={errors.content ? "form-control shadow-none error" : "form-control border border-danger shadow-none"}
                            {...register("content")}
                        />
                    </FormGroup>


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
