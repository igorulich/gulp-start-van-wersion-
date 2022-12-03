"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import webp from "gulp-webp";
import browserSync from "browser-sync";
export const Webp = (sb) => {
	return src(config.src.images)
		.pipe(webp({ quality: 95 }))
		.pipe(dest(config.build.images))
		.pipe(browserSync.reload({ stream: true })),
	sb();
};
