import { RefreshCw } from 'lucide-react';

/**
 * AdminPage — wrapper for admin pages that shows a loading overlay
 * instead of swapping the component tree (which causes React insertBefore crashes).
 */
export function AdminPage({
  loading,
  children,
  className = '',
}: {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0f172a]/70 z-20 rounded-lg min-h-[200px]">
          <RefreshCw className="h-8 w-8 text-[#cda434] animate-spin" />
        </div>
      )}
      {children}
    </div>
  );
}

/**
 * SaveButton — button with stable icon DOM (opacity swap, no DOM swap).
 * Prevents the insertBefore crash caused by {saving ? <A/> : <B/>} patterns.
 */
export function SaveButton({
  saving,
  onClick,
  label = 'Sauvegarder',
  savingLabel = 'Sauvegarde...',
  disabled,
  className = '',
  Icon,
}: {
  saving: boolean;
  onClick: () => void;
  label?: string;
  savingLabel?: string;
  disabled?: boolean;
  className?: string;
  Icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled ?? saving}
      className={`inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${className}`}
    >
      <span className="relative flex items-center justify-center h-4 w-4">
        {Icon && (
          <Icon
            className={`h-4 w-4 absolute transition-opacity ${saving ? 'opacity-0' : 'opacity-100'}`}
          />
        )}
        <RefreshCw
          className={`h-4 w-4 absolute animate-spin transition-opacity ${saving ? 'opacity-100' : 'opacity-0'}`}
        />
      </span>
      {saving ? savingLabel : label}
    </button>
  );
}
