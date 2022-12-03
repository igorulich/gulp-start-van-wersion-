"use strict";
import { config } from "../configModul ";
import browserSync from "browser-sync";
export function server(sb) {
	browserSync.init(config.serverConfig), sb();
};
