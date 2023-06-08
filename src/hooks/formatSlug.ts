import { FieldHook } from "payload/types";

const formatSlug = (fallback: string): FieldHook => ({ operation, data, originalDoc, value }) => {
  const slugify = (val: string): string => val.replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase();

  if (typeof value === 'string') {
    return slugify(value);
  }

  if (operation === 'create') {
    const fallbackData = data?.[fallback] || originalDoc?.[fallback];

    if (fallbackData && typeof fallbackData === 'string') {
      return slugify(fallbackData);
    }
  }
};

export default formatSlug