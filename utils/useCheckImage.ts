export function useCheckImage(file: any) {
  if (file.type === 'image/jpeg') {
    return true;
  }
  if (file.type === 'image/jpg') {
    return true;
  }
  if (file.type === 'image/png') {
    return true;
  }
  return false;
}
