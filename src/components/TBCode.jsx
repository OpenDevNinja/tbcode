
import React from 'react';

const TBCode = () => {
  return (
    <span className="text-2xl sm:text-3xl font-heading font-bold bg-gradient-to-r from-teal via-accent to-teal bg-size-200 bg-pos-0 hover:bg-pos-100 bg-clip-text text-transparent transition-all duration-500">
      T.B<Code/>
    </span>
  );
};

const Code = () => {
  return <span className="font-mono">&lt;Code/&gt;</span>;
};

export default TBCode;