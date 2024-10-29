import React from "react";
import "../Style/CardProduct.css";

const CardProduct = () => {
  return (
    <div className="column-card">
      <div className="card">
        <div className="date">
          <p className="year">Q1 2019</p>
          <p className="month">January - March</p>
        </div>

        <div className="subcard">
          <p>Re-designed the zero-g doggie bags. No more spills!</p>
          <div className="indicator">
            <span>
              <img src="../weight.svg" />
              64%
            </span>
            <img src="../more-grey.svg" />
          </div>
        </div>

        <div className="subcard">
          <p>Travel & Relocation Support</p>
          <div className="indicator">
            <span>
              <img src="../weight.svg" />
              12%
            </span>
            <img src="../more-grey.svg" />
          </div>
        </div>

        <div className="create-task">
          <span className="create-task">
            <img src="../plus - purple.svg" />
            Create new task
          </span>
        </div>
      </div>

      <div className="card">
        <div className="date">
          <p className="year">Q2 2019</p>
          <p className="month">April - June</p>
        </div>
        <p className="no-task">No Task Available</p>

        <div className="create-task">
          <span className="create-task">
            <img src="../plus - purple.svg" />
            Create new task
          </span>
        </div>
      </div>

      <div className="card">
        <div className="date">
          <p className="year">Q3 2019</p>
          <p className="month">July - September</p>
        </div>

        <div className="subcard">
          <p>Bundle interplanetary analytics for improved transmission</p>
          <div className="indicator">
            <span>
              <img src="../weight.svg" />
              90%
            </span>
            <img src="../more-grey.svg" />
          </div>
        </div>

        <div className="create-task">
          <span className="create-task">
            <img src="../plus - purple.svg" />
            Create new task
          </span>
        </div>
      </div>

      <div className="card">
        <div className="date">
          <p className="year">Q4 2019</p>
          <p className="month">October - December</p>
        </div>

        <div className="subcard">
          <p>Data Migration: Perfomance & Culture End Game</p>
          <div className="indicator">
            <span>
              <img src="../weight.svg" />
              63%
            </span>
            <img src="../more-grey.svg" />
          </div>
        </div>

        <div className="create-task">
          <span className="create-task">
            <img src="../plus - purple.svg" />
            Create new task
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
