import React, { useRef, useState } from "react";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik"; // importing Formik components
import { useDispatch } from "react-redux"; // importing useDispatch hook from react-redux library
import { addCard } from "./Redux/mySlice"; // importing addCard and clearCard actions from the mySlice slice
import { MdUploadFile, MdAdd, MdDeleteOutline } from "react-icons/md"; // importing icons from react-icons/md library
import { BiEdit } from "react-icons/bi"; // importing icon from react-icons/bi library
import { validationSchema } from "../Components/Validation"; // importing validation schema from the Validation.js file
import { v4 as uuidv4 } from "uuid"; // importing uuidv4 function to generate unique ids
import toast from "react-hot-toast"; // For alert messages

import { useNavigate } from "react-router-dom";

const CreateInputs = () => {
  const [localValues, setLocalValues] = useState(null);
  const initialValues = {
    id: uuidv4(),
    groupname: "",
    description: "",
    flashterms: [{ term: "", defination: "" }],
  };
  let dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const onSubmit = (values) => {
    dispatch(addCard(values));
    setLocalValues(values);
    console.log(localValues);

    toast.success("Card submitted successfully!", "Success");

    navigate("/myflashcards");
  };

  const focusOnTermField = (index) => {
    const termFieldRef = document.getElementById(`termField-${index}`);
    if (termFieldRef) {
      termFieldRef.focus();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, isSubmitting, props, form, setFieldValue }) => (
          <Form>
            <div className="pt-2 sm:pt-5 mx-7 sm:mx-12 md:mx-20 lg:mx-24">
              <div className="grid sm:grid-cols-1 gap-6">
                <div className="p-6 sm:p-10 bg-slate-50 rounded-md shadow-lg">
                  <div className="sm:flex">
                    <div>
                      <label className="flex text-gray-500 mb-0.5 text-sm">
                        Create Group *
                      </label>
                      <Field
                        className="placeholder-gray-300 mb-1 p-2 h-8 w-full sm:w-60 border border-gray-400 rounded-sm focus:outline-none"
                        type="text"
                        placeholder="Enter Groupname"
                        name="groupname"
                      />
                    </div>

                    <div className="w-36 h-8 mt-3.5 sm:mt-5 sm:mx-4 border border-gray-400 rounded-sm hover:cursor-pointer ">
                      <div className="text-purple-700 ">
                        <input
                          type="file"
                          id="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={(event) => {
                            // console.log(event.currentTarget.files[0]);
                            setFieldValue("file", event.currentTarget.files[0]);
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRef.current.click()}
                          style={{ cursor: "pointer" }}
                          className="
                          text-md
                          flex
                          items-center
                          justify-center
                          font-semibold"
                        >
                          {" "}
                          <MdUploadFile className="h-auto w-6 mt-1 mr-2 " />{" "}
                          Upload file
                        </button>
                      </div>

                      <input type="file" className="hidden" />
                    </div>
                  </div>
                  <ErrorMessage
                    name="groupname"
                    component="div"
                    className="text-red-500 text-xs"
                  />

                  <label className="block mb-0.5 mt-2 text-gray-500 text-sm">
                    Add Description
                  </label>

                  <Field
                    as="textarea"
                    type="text"
                    className="w-2/3 p-2 text-sm border border-gray-400 rounded-sm placeholder-gray-300 focus:outline-none "
                    name="description"
                    placeholder="Describe the roles,responsibility,skills required for the job and help candidate understand the role better."
                  />

                  <ErrorMessage
                    component="div"
                    name="description"
                    className="flex text-red-500 text-xs mb-1"
                  />
                </div>

                <div className="py-3 bg-slate-50 rounded-md shadow-lg">
                  <FieldArray name="flashterms">
                    {/* push and remove are the formik properties to add and remove the elements */}
                    {({ push, remove }) => (
                      <React.Fragment>
                        {values.flashterms.map((myterms, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-1 px-6 sm:px-10 sm:w-auto sm:flex"
                          >
                            <div className="bg-green-500 mt-3  sm:mt-5 sm:mr-4 h-6 w-6 rounded-full text-white shrink-0">
                              <span className="flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <div className="w-full sm:mt-4 sm:mr-4">
                              <label className="block mb-0.5 text-gray-500 text-sm">
                                Enter Term *
                              </label>
                              <Field
                                name={`flashterms.${index}.term`}
                                type="text"
                                placeholder="Enter Term"
                                id={`termField-${index}`}
                                className="placeholder-gray-300 w-full p-2 h-8 border border-gray-400 rounded-sm focus:outline-none"
                              />
                              <ErrorMessage
                                name={`flashterms.${index}.term`}
                                component="div"
                                className="text-red-500 text-xs"
                              />
                            </div>

                            <div className="mt-3 sm:mt-4 sm:ml-10 md:ml-10 lg:ml-10 w-full">
                              <label className="block mb-0.5 text-gray-500 text-sm">
                                Enter Defination *
                              </label>
                              <Field
                                className="placeholder-gray-300 p-2 h-8 w-full border border-gray-400 rounded-sm focus:outline-none"
                                type="text"
                                placeholder="Enter Defination"
                                name={`flashterms[${index}].defination`}
                              />
                              <ErrorMessage
                                name={`flashterms.${index}.defination`}
                                component="div"
                                className="text-red-500 text-xs"
                              />
                            </div>

                            {index >= 0 && (
                              <div className="flex items-center justify-start sm:mt-8 text-purple-700">
                                <button
                                  type="button"
                                  className="mr-4"
                                  onClick={() => remove(index)}
                                >
                                  <MdDeleteOutline className="w-6 h-12 sm:ml-4" />
                                </button>

                                <BiEdit
                                  className="w-6 h-12 cursor-pointer"
                                  onClick={() => focusOnTermField(index)}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                        <button
                          onClick={() => push({ term: "", defination: "" })}
                          type="button"
                          className="flex font-semibold pt-4 pb-2 ml-6 sm:ml-16 text-blue-600"
                        >
                          <MdAdd className="self-center mr-1" /> Add more
                        </button>
                      </React.Fragment>
                    )}
                  </FieldArray>
                </div>
              </div>
              <div className="my-10 grid place-content-center">
                <button
                  type="submit"
                  className="px-14 py-1.5 rounded-sm bg-red-600 text-white text-sm active:bg-red-700"
                >
                  Create
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateInputs;
