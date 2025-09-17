const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #404040 50%, #1f1f1f 75%, #0a0a0a 100%)"
    }}>
      <div className="text-center p-8">
        <div className="glass-card p-8 max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Unauthorized</h1>
          <p className="text-lg text-white/80 mb-6">
            You don't have permission to access this VCard or the location ID is invalid.
          </p>
          <p className="text-sm text-white/60">
            Please check the URL or contact your administrator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;