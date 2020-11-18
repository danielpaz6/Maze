import { useEffect, useRef } from 'react';

const noop = () => {};

export function useKey(keys, action) {
  const actionRef = useRef(noop);
  actionRef.current = action;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (keys.includes(event.key)) {
        event.preventDefault();
        if (actionRef.current) {
          actionRef.current(event);
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [keys]);
}
