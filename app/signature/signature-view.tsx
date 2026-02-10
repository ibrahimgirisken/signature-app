'use client';
import React from 'react';
import { Container } from 'react-bootstrap';

type SignatureViewProps = {
  signatureHtml: string;
  targetRef: React.RefObject<HTMLDivElement | null>;
};

function SignatureView({ signatureHtml, targetRef }: SignatureViewProps) {
  return (
    <Container className="signature-shema">
      <div ref={targetRef} dangerouslySetInnerHTML={{ __html: signatureHtml }} />
    </Container>
  );
}

export default SignatureView;
