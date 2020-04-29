import React from 'react';

function BatchDetails(props) {
  const { batch,title,start,time,days,duration,fees } = props;

  return (
    <div class="cur_item col-md-6">
        <div class="cur_title_container d-flex flex-row align-items-start justify-content-start">
        <div class="cur_title">{batch}</div>
        {/* <div class="cur_num ml-auto">0/4</div> */}
        </div>
        <div class="cur_item_content">
        <div class="cur_item_title">{title}</div>
        {/* <div class="cur_item_text">
            <p>Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum.</p>
        </div> */}
        <div class="cur_contents">
            <ul>
                
            <li class="d-flex flex-row align-items-center justify-content-start">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i><span>Start Date</span>
                <div class="cur_time ml-auto"><span>{start}</span></div>
            </li>
            <li class="d-flex flex-row align-items-center justify-content-start">
                <i class="fa fa-folder" aria-hidden="true"></i><span>Time</span>
                <div class="cur_time ml-auto"><span>{time}</span></div>
               
            </li>
            <li class="d-flex flex-row align-items-center justify-content-start">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i><span>Days</span>
                <div class="cur_time ml-auto"><span>{days}</span></div>
            </li>
            <li class="d-flex flex-row align-items-center justify-content-start">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i><span>Est. Course Duration</span>
                <div class="cur_time ml-auto"><span>{duration}</span></div>
            </li>
            <li class="d-flex flex-row align-items-center justify-content-start">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i><span>Fees</span>
                <div class="cur_time ml-auto"><span>{fees}</span></div>
            </li>
            </ul>
        </div>
        </div>
    </div>
  );
}

export default BatchDetails;
