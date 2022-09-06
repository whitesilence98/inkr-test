/* eslint-disable @next/next/no-img-element */
import React from 'react';

import {useRouter} from 'next/router';

// import './loading-module.scss';

interface ILoading {
  overlay?: boolean;
}

const Loading = ({overlay = false}: ILoading): JSX.Element => {
  const router = useRouter();

  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return loading ? (
    <div className={`loading-wrapper ${overlay && 'loading-wrapper--overlay'}`}>
      <div className="boxes">
        <div className="box">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="box">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="box">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="box">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <a
        className="dribbble"
        href="https://dribbble.com/shots/5533600-Loading-boxes"
        target="_blank"
        rel="noreferrer">
        <img
          src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
          alt=""
        />
      </a>
    </div>
  ) : (
    <></>
  );
};

export default Loading;
