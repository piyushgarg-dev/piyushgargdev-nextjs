import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
// import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import { FaFilter } from "react-icons/fa/index.js";

const Courses = ({ courses = [] }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const filterCourses=(()=>{
     // Create a Set to store unique keywords
  const uniqueKeywords = new Set();

  // Iterate over each course to collect keywords
  console.log(courses)
  courses.forEach(course => {
    course.keyword.forEach(keyword => uniqueKeywords.add(keyword));
  });

  // Convert the Set back to an array
  const keywordsArray= Array.from(uniqueKeywords);
  return keywordsArray; 
  
  })
  const keywordsArray = filterCourses(courses);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  // Function to handle checkbox change
  const handleCheckboxChange = (keyword) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(keyword)) {
        return prevFilters.filter((filter) => filter !== keyword);
      } else {
        return [...prevFilters, keyword];
      }
    });
  };

  return (
    <section id="courses">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Courses" />
            <div style={{ display: "flex", marginTop:'30px' }}>
              <FaFilter
                size={25}
                color="white"
                style={{ marginTop: "30px", marginRight:'10px', cursor: "pointer" }}
                onClick={toggleFilter}
              />
              <h4 className="mt-4 text-2xl">Checkout My Interactive Courses</h4>
            </div>
          </Col>
        </Row>

        {showFilter ? (
          <Row>
            <Col lg="12" className="mb-3">
              <div style={{color:'white', fontSize:'50px'}}><b>Filter Options:</b></div>
              <ul style={{ listStyle: "none", padding: '20px', margin:'10px', display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                {keywordsArray.map((keyword, index) => (
                  <li key={index} style={{
                    margin:'10px',
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "18px",
                    color: "white",
                    userSelect: "none",
                  }}>
                    <label>
                      <input
                        type="checkbox"
                        value={keyword}
                        checked={selectedFilters.includes(keyword)}
                        onChange={() => handleCheckboxChange(keyword)}
                        style={{
                          marginRight: "8px",
                          width: "18px",
                          height: "18px",
                          cursor: "pointer",
                          accentColor: "#007bff", // Customize accent color
                        }}
                      />
                      {keyword}
                    </label>
                  </li>
                ))}
              </ul>
              <button
                style={{
                  padding: "8px 16px",
                  background: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={toggleFilter}
              >
                Show Courses
              </button>
            </Col>
          </Row>
        ) : (
          <Row>
            {courses
            .filter((item) => {
              // If no filters are selected, show all courses
              if (selectedFilters.length === 0) return true;

              // Check if the course's keywords include any of the selected filters
              return item.keyword.some((keyword) => selectedFilters.includes(keyword));
            })
            .map((item) => (
              <Col
                style={{ margin: "10px 0px" }}
                key={item.id}
                lg="4"
                md="4"
                sm="6"
                className="hover:scale-105 hover:ease-out duration-300 shadow-md"
              >
                <PortfolioItem item={item} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};


export default Courses;
