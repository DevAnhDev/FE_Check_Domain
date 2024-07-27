import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress, Space } from 'antd';
import Message from '../../common/notifi';
import { useDispatch, useSelector } from 'react-redux';
import { scanDomainAction } from '../../redux/action/domainAction';
import { DOMAIN, scanDomain } from '../../constans/endpoint';
import { SCAN_DOMAIN_FAILE_UPDATE_STATUS } from '../../constans/constaincase';
const ScanDomainPage = () => {
  const [percent, setPercent] = useState(0);
  const navigate = useNavigate();
  const { contextHolder, showMessage } = Message();
  const dispatch = useDispatch();
  const {isScan, isScanLoading} = useSelector((state)=>state.domain)
    const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    if(isScan === false && !isScanLoading && isLoading === true){
        showMessage("Scan domain Failed!!", "error")
      }
    if(isScan === true && !isScanLoading && isLoading){
        dispatch({type: SCAN_DOMAIN_FAILE_UPDATE_STATUS})
          navigate("/domains/list_domains");
    }
    setisLoading(true)
  }, [isScan])
  


  const handleScanDomain = () => {
    setPercent(0);
    //scan api
    dispatch(scanDomainAction(DOMAIN+scanDomain));
    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        if (prevPercent >= 100) {
          clearInterval(interval);
        //   navigate("/domains/list_domains");
          return 100;
        }
        return prevPercent + 10;
      });
    }, 1000); // Tăng 10% mỗi giây
  };




  return (
    <div className="scan-domain-page">
      {/* Đoạn video nền MP4 */}
      <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>
      </div>
      {contextHolder}
      <div className="content">
        <h2>Scan Domain</h2>
        <div style={{display: 'flex',flexDirection:'column', justifyContent:'center'}}>
                <button className="scan-button" onClick={handleScanDomain}>
                {isScanLoading ? 'Scanning...' : 'Scan Domain'}
                </button>
                <div style={{marginTop:30}}></div>
                {isScanLoading ?<Progress percent={percent} percentPosition={{ align: 'center', type: 'inner' }} size={[400, 20]} />:null}
            </div>
        </div>

    </div>
  );
};

export default ScanDomainPage;
