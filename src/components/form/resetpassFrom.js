import React, { useState } from 'react'
import { Eye, EyeOff } from 'react-feather'
import { Text } from '../text/Text'
import { FormGroup } from '../formGroup/index'
import { Card } from '../card/index'
import { DangerButton } from '../button/index'



export const ResetPasswordForm = (props) => {
    const { handleSubmit, onSubmit, errors, isLogging, register } = props;
    const [show, setShow] = useState(false)

    return (
        <Card.Simple className="shadow-none border border-danger p-4">
            <Card.Header className="bg-white px-0 text-center border-0">
                <Text className="fs-20 font-weight-bolder mb-1">Password Reset</Text>
            </Card.Header>
            <Card.Body className="px-0">
                <form onSubmit={handleSubmit(onSubmit)}>


                    {/* New Password */}
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


                    {/* Re-Enter Password */}
                    <FormGroup>
                        {errors.repassword && errors.repassword.message ?
                            <Text className="text-danger fs-13 mb-1">{errors.repassword && errors.repassword.message}</Text> :
                            <Text className="text-capitalize fs-13 mb-1 text-danger text-bold">Password</Text>
                        }

                        <div style={{ position: "relative" }}>
                            <input
                                type={show ? "text " : "password"}
                                placeholder="*****"
                                className={errors.repassword ? "form-control shadow-none error" : "form-control border border-danger shadow-none"}
                                {...register("repassword", { required: "Password is required" })}
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
