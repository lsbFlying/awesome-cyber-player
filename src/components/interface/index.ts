import React from "react";

/** 样式props */
export interface ICSSProps {
  /** html id name */
  id?: string;
  /** html class name */
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  /** 样式 */
  style?: React.CSSProperties;
}

export interface BasicProps {}

export interface Basic<P extends BasicProps = BasicProps, S = {}, SS = any>
	extends React.PureComponent<P, S, SS> {}

/**
 * css接口，命名为ICSS是为了避免与系统重名
 * @interface ICSS
 * @extends {Basic<T, S, SS>}
 * @template T
 * @template S
 * @template SS
 */
export interface ICSS<T extends ICSSProps = ICSSProps, S = {}, SS = any>
	extends Basic<T, S, SS> {}

export type AwesomeCyberPlayerProps = ICSSProps & {
  /** 视频链接 */
  url: string;
  /** 针对需要加密的携带token的视频 */
  token?: string;
  /** 视频宽 */
  width?: number | string;
  /** 视频高 */
  height?: number | string;
};

export interface AwesomeCyberPlayerState {
  /** 唯一性状态id */
  statusId: string;
}
