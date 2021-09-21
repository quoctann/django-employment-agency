import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import API, { endpoints } from '../../helpers/API';
import { PublicRoutes } from '../../routes/public-route';

export default function RecruiterInfo() {
    const history = useHistory();
    const { state } = useLocation();
    const [relatedJobs, setRelatedJobs] = useState([]);

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function init() {
            setLoading(true)
            await fetchRelatedJobs()
        }
        init()
    }, [])

    const fetchRelatedJobs = async () => {
        setTimeout(() => {
            const _path = endpoints['related-job'].replace(":id", `${state?.recruiter?.id}`)
            API.get(_path).then(res => {
                setRelatedJobs(res.data)
                setLoading(false)
            })
        }, 500);
    }

    const handleJob_click = (j) => {
        const _path = PublicRoutes.JobDetail.path.replace(":id", j.id)
        history.push(_path, {
            job: j,
        })
    };

    return (
        <div>
            {loading ? <h1>loading . . .</h1> : (
                <div>
                    <h1>{`${state?.recruiter?.ten_cong_ty}`}</h1>
                    <span>Địa chỉ: {`${state?.recruiter?.dia_chi}`}</span>
                    <div>thông tin về công ty: {`${state?.recruiter?.gioi_thieu}`}</div>
                    <h4>Danh sách các tin việc làm còn hoạt động của công ty</h4>
                    {relatedJobs.map((j, idx) =>
                        <div key={j.id + idx}>
                            <span>Công việc {idx}: </span><span onClick={() => handleJob_click(j)}>{j.tieu_de}</span>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}