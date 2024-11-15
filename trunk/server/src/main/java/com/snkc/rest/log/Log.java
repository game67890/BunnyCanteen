package com.snkc.rest.log;

import java.util.Map;

public record Log(String logType, Map<String, String> parameters) {
}
