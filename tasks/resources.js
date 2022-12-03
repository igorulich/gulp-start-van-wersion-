"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import browserSync from "browser-sync";
export function resources(sb) {
	return src(config.src.resources)
		.pipe(dest(config.build.resources))
		.pipe(browserSync.reload({ stream: true })), sb();
};
