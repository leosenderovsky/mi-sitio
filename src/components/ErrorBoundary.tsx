import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * Displays a fallback UI instead of crashing the entire app
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.MODE === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-site-dark">
          <div className="text-center px-4">
            <h1 className="text-4xl font-heading text-white mb-4">
              Oops! Algo salió mal
            </h1>
            <p className="text-white/60 mb-8 max-w-md">
              Lo sentimos, ocurrió un error inesperado. Por favor, recarga la página e intenta nuevamente.
            </p>
            {import.meta.env.MODE === 'development' && this.state.error && (
              <details className="text-left bg-red-500/10 border border-red-500/30 rounded p-4 mb-6 text-red-100 text-sm">
                <summary className="cursor-pointer font-bold mb-2">
                  Detalles del error (solo en desarrollo)
                </summary>
                <pre className="overflow-auto whitespace-pre-wrap break-words">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.href = '/'}
              className="bg-site-teal text-site-dark px-6 py-3 rounded-full font-heading uppercase hover:bg-white transition-colors"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
