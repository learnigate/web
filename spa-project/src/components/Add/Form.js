import React, {useContext} from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import axios from "axios";

import {MyContextData} from "../../contexts/PathContext";


function Form() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `;

  const {setAddingCounter} = useContext(MyContextData);
  const {addingCounter} = useContext(MyContextData);

  const formik = useFormik({
    initialValues: {
      keywords: "",
      pathName: "",
    },
    onSubmit:
      (values) => {
        axios({ 
          method: 'post', 
          url: `http://localhost:8090/user/add?username=liza&pathName=${values.pathName}`, 
          data: JSON.stringify([`${values.keywords.split(' ')}`]),
          headers: { "Content-Type": "application/json" },
          }) 
          .then(res => { 
            if (res.status === 200) {
              console.log(res);
            } 
          }).catch(err => { 
            console.error(err);
          });
          setAddingCounter(addingCounter+1);
          console.log(addingCounter);

  } 
});

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <label htmlFor="keywords">Keywords</label>
          <input
            id="keywords"
            name="keywords"
            type="string"
            onChange={formik.handleChange}
            value={formik.values.keywords}
          />

          <label htmlFor="pathName">Path name</label>
          <input
            id="pathName"
            name="pathName"
            type="string"
            onChange={formik.handleChange}
            value={formik.values.pathName}
          />

          <button style={{ marginTop: "10px" }} type="submit">
            Submit
          </button>
        </Container>
      </form>
    </>
  );
}
export default Form;
