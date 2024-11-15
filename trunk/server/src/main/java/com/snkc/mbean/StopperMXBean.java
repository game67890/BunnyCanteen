package com.snkc.mbean;

public interface StopperMXBean {
	void setStopTime(long time);

	long getStopTime();

	void stop(int seconds);
}
