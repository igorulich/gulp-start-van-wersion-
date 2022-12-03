"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import browserSync from "browser-sync";
export function svgIcons(sb) {
	return src(config.src.icons)
		.pipe(dest(config.build.css))
		.pipe(browserSync.reload({ stream: true })), sb();
};
