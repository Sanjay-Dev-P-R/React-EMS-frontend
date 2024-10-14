import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

function View() {

  const { id } = useParams();
  console.log(id);
  const [anEmployee, setAnEmployee] = useState(); //particular employee details
  //api call to fetch particular employee details

  const fetchEmployee = async () => {
    const response = await axios.get(
      "http://localhost:8000/getAnEmployees/" + id
    );
    console.log(response.data.employee); //particular employee details
    setAnEmployee(response.data.employee);
  };
  console.log(anEmployee); //particular employee details

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div>
      <div className="container">
        {
          <MDBCard className="m-5">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <div className="text-center">
                <MDBCardImage
                  style={{ width: "200px", height: "300px" }}
                  src="https://th.bing.com/th/id/R.ab01b0e99e6089d02c0957dafe4decba?rik=wKS4tLyfLP65SQ&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f04%2femployee-icon_150781.jpg&ehk=sEVxAvyCDU7q5Sku99HeyE6JioZb1Dvl%2fMFft1DEGNM%3d&risl=&pid=ImgRaw&r=0"
                  fluid
                  alt="..."
                />
              </div>
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardText>
                <MDBListGroup style={{ minWidth: "22rem" }} light>
                  <MDBListGroupItem
                    active
                    noBorders
                    aria-current="true"
                    className="px-3"
                  >
                    Name:{anEmployee?.name}
                  </MDBListGroupItem>
                  <MDBListGroupItem className="px-3">
                    Age:{anEmployee?.age}
                  </MDBListGroupItem>
                  <MDBListGroupItem noBorders className="px-3">
                    Designation:{anEmployee?.designation}
                  </MDBListGroupItem>
                  <MDBListGroupItem noBorders className="px-3">
                    Salary:{anEmployee?.salary}
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardText>
              <div className="text-center">
                <Link to={"/"}>
                  <MDBBtn>Back To Home</MDBBtn>
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        }
      </div>
    </div>
  );
}

export default View;