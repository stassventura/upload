export type CommonItemParams = {
  id: string;
  name: string;
};
export interface PreviewImage extends CommonItemParams {
  src: string;
}
export interface PreviewFile extends CommonItemParams {
  ext: string;
}

export type PreviewItem = PreviewImage | PreviewFile;
