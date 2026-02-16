export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-02-16'

// Sanitize function to ensure valid projectId format (only a-z, 0-9, and dashes)
function sanitizeProjectId(id: string | undefined): string {
  const defaultId = '2zr5d6n5';
  if (!id) return defaultId;
  // Remove quotes, whitespace, and any invalid characters
  const cleaned = id.replace(/['"]/g, '').trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
  return cleaned || defaultId;
}

// Make Sanity optional - use defaults if env vars not set
export const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').replace(/['"]/g, '').trim()

export const projectId = sanitizeProjectId(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)

// Flag to check if Sanity is properly configured
export const isSanityConfigured = !!(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
  process.env.NEXT_PUBLIC_SANITY_DATASET
)
