import React, { useState } from "react"


export default function DailyApprovals() {

  function getCurrentDate() {

    const nth = function (d) {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    }
  
    const monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
  
    let newDate = new Date()
    let day = newDate.getDate();
    let month = monthArr[newDate.getMonth()];
    let year = newDate.getFullYear();
  
    return `Today ${month} ${day}${nth(day)}, Did you... ?`
  
  }


  return (
    <div class="wrapper">
      <p className="daily-report">Daily Report</p>
      <p className="daily-report currDate">{getCurrentDate()}</p>
      <hr />
    </div>
  )
}
