type ErrorProps = {
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

function Error({ resetErrorBoundary }: ErrorProps) {
  return (
    <main className="App-main">
      There was an error!
      <button type="button" onClick={() => resetErrorBoundary()}>
        Try again
      </button>
    </main>
  );
}

export default Error;
