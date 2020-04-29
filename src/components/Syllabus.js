import React from 'react';

function Syllabus(props) {
  const {title,subsection,id,cid, ...other } = props;

  return (
    <div class="card">
        <div class="card-header" id={"heading" + cid}>
            <h2 class="mb-0">
                <button class="d-flex align-items-center justify-content-between btn btn-link" data-toggle="collapse" data-target={"#collapse" + cid} aria-expanded="true" aria-controls={"collapse" + cid}>
                <div dangerouslySetInnerHTML={{ __html: title }} style={{whiteSpace:'normal'}} />
                <span class="fa-stack fa-sm">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-plus fa-stack-1x fa-inverse"></i>
                </span>
                </button>
            </h2>
        </div>
        <div id={"collapse" + cid} class="collapse" aria-labelledby={"heading" + cid} data-parent="#accordionnew">
            <div class="card-body">
                <div dangerouslySetInnerHTML={{ __html: subsection }} />
            </div>
        </div>
    </div>
  );
}

export default Syllabus;
