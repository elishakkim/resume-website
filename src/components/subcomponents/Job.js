import React from "react";
import { JOB_DESCRIPTION } from "../../files/ExperienceContstants";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Job = (props) => {
  const {
    timeframe,
    title,
    location,
    experience
  } = props

  return (
    <>
      <div className="row">
        <div className="col-sm-2 col-md-3">
          <b>{title}</b>
        </div>
        <div className="col-sm-10 col-md-9">
          <b>{timeframe}</b>
          <br />
          <i>{location}</i>
        </div>
      </div>
      <div className="w-100 d-block">
        <hr className="my-1" />
      </div>
      <div className="row ms-3 mt-sm-1 mt-md-2">
      <ul>
        {JOB_DESCRIPTION[experience].map((line) => (
          <li className="mt-1">{line}</li>
        ))}
      </ul>
    </div>
    </>
  )
}