package com.snkc.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

/**
 * 一些日期,时间的判断方法
 *
 * @author yesheng
 */

public class DateValidate {


    public static final long secondMills = 1000;
    public static final long minuteMills = 1000 * 60;
    public static final long hourMills = 1000 * 60 * 60;
    public static final long dayMills = hourMills * 24;

    public static final long weekMills = dayMills * 7;

    public static final long TIME_ZONE_OFFSET = Calendar.getInstance().getTimeZone().getRawOffset();//时区导致的差值

    public static final long addMills = 1000 * 60 * 60 * 24 * 3;//Java时间的第一天（1970.1.1）是周四，这个是把一周的前三天补全的时间（以周一为第一天）

    public static final long rawTimeOffset = TimeZone.getDefault().getRawOffset();

    /**
     * @param firstTime
     * @param secondTime
     * @param type       1-小时 2-天 3-周 4-月 5-年
     * @return
     */
    public static boolean inTheSamePeriod(long firstTime, long secondTime, int type) {
        switch (type) {
            case 1:
                return inTheSameHour(firstTime, secondTime);
            case 2:
                return inTheSameDay(firstTime, secondTime);
            case 3:
                return inTheSameWeek(firstTime, secondTime);
            case 4:
                return inTheSameMonth(firstTime, secondTime);
            case 5:
                return inTheSameYear(firstTime, secondTime);
        }
        throw new IllegalArgumentException("type不对，1-小时 2-天 3-周 4-月 5-年。s");
    }

    public static boolean inTheSameHour(long time1, long time2) {
        if (!inTheSameDay(time1, time2)) {
            return false;
        }
        Date date1 = new Date(time1);
        Date date2 = new Date(time2);
        Calendar cal1 = Calendar.getInstance();
        Calendar cal2 = Calendar.getInstance();
        cal1.setTime(date1);
        cal2.setTime(date2);
        return cal1.get(Calendar.HOUR_OF_DAY) == cal2.get(Calendar.HOUR_OF_DAY);
    }

    public static boolean inTheSameDay(long firstT, long secondT) {

        return getCurrentDay(firstT) == getCurrentDay(secondT);
    }

    public static int getCurrentWeek(long time) {

        return (int) ((time + rawTimeOffset + addMills) / weekMills) + 1;
    }

    public static boolean inTheSameWeek(long firstT, long secondT) {
        return getCurrentWeek(firstT) == getCurrentWeek(secondT);
    }

    //获得今天的最后一秒
    public static Calendar getLastSecondCalendar() {
        Calendar current = Calendar.getInstance();
        current.set(Calendar.HOUR_OF_DAY, 23);
        current.set(Calendar.MINUTE, 59);
        current.set(Calendar.SECOND, 59);
        return current;
    }

    public static int getCurrentDay(long time) {

        return (int) ((time + rawTimeOffset) / dayMills);
    }

    //获得当前时间点的日历
    public static Calendar getcurrentCalendar() {
        Calendar current = Calendar.getInstance();
        current.setTimeInMillis(System.currentTimeMillis());
        return current;
    }

    //获取某小时的最后一毫秒
    public static long getHourLastMills(long time) {
        final Calendar cal = Calendar.getInstance();
        cal.setTimeInMillis(time);
        int hour = cal.get(Calendar.HOUR_OF_DAY);
        cal.set(Calendar.HOUR_OF_DAY, hour + 1);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.SECOND, 0);
        return cal.getTimeInMillis() - 1;
    }

    //获取某天的第一秒 add by lc
    public static long getDayFirstSecond(long time) {
        return time - (time + TIME_ZONE_OFFSET) % dayMills;
    }

    //获取某周的第一秒（以 周一算） add by lc
    public static long getWeekFirstSecond(long time) {
        return time - (time + TIME_ZONE_OFFSET + addMills) % weekMills;
    }

    //获取该月的第一秒
    public static long getMonthFirstSecond(long time) {
        final Calendar cal = Calendar.getInstance();
        cal.setTimeInMillis(time);
        cal.set(Calendar.DAY_OF_MONTH, 1);
        cal.set(Calendar.HOUR_OF_DAY, 0);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.SECOND, 0);
        cal.set(Calendar.MILLISECOND, 0);
        return cal.getTimeInMillis();
    }

    //获取该月的最后一秒
    public static long getMonthLastSecond(long time) {
        final Calendar cal = Calendar.getInstance();
        cal.setTimeInMillis(time);
        cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
        cal.set(Calendar.HOUR_OF_DAY, 23);
        cal.set(Calendar.MINUTE, 59);
        cal.set(Calendar.SECOND, 59);
        cal.set(Calendar.MILLISECOND, 0);
        return cal.getTimeInMillis();
    }

    public static boolean inTheSameMonth(long firstT, long secondT) {
        final Calendar cal1 = Calendar.getInstance();
        final Calendar cal2 = Calendar.getInstance();
        cal1.setTimeInMillis(firstT);
        cal2.setTimeInMillis(secondT);

        if (cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR)
                && cal1.get(Calendar.MONTH) == cal2.get(Calendar.MONTH))
            return true;
        return false;

    }

    public static String formatTimeByType(long time, String format) {
        String myFormat = null == format ? "yyyy年M月d日    HH:mm:ss" : format;
        SimpleDateFormat fomat = new SimpleDateFormat(myFormat);
        return fomat.format(time);
    }

    public static boolean inTheSameYear(long firstT, long secondT) {
        final Calendar cal1 = Calendar.getInstance();
        final Calendar cal2 = Calendar.getInstance();
        cal1.setTimeInMillis(firstT);
        cal2.setTimeInMillis(secondT);

        if (cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR))
            return true;
        return false;
    }

    /**
     * 判断当前时间是不是在给定的时间段之间     必须是当天的
     * end > begin  [0:00  ~ 24:00]
     *
     * @param begin
     * @param end
     * @return
     */
    public static boolean isInTimeSubsection(String begin, String end) {
        try {
            begin = begin.replace("：", ":");
            end = end.replace("：", ":");

            String[] beginArray = begin.split(":");
            String[] endArray = end.split(":");
            if (beginArray.length < 2 || endArray.length < 2) {
                throw new RuntimeException("时间段格式错误：");
            }

            int beginHour = Integer.parseInt(beginArray[0]);
            int beginMin = Integer.parseInt(beginArray[1]);
            int endHour = Integer.parseInt(endArray[0]);
            int endMin = Integer.parseInt(endArray[1]);

            if (beginHour > endHour ||
                    beginHour < 0 || beginHour > 24 ||
                    endHour < 0 || endHour > 24) {
                throw new RuntimeException("结束时间段 应当大于开始时间段");
            }

            Calendar calendar = Calendar.getInstance();
            calendar.clear(Calendar.HOUR_OF_DAY);
            calendar.clear(Calendar.MINUTE);
            calendar.set(Calendar.HOUR_OF_DAY, beginHour);
            calendar.set(Calendar.MINUTE, beginMin);
            long startTime = calendar.getTimeInMillis();

            calendar.clear(Calendar.HOUR_OF_DAY);
            calendar.clear(Calendar.MINUTE);
            calendar.set(Calendar.HOUR_OF_DAY, endHour);
            calendar.set(Calendar.MINUTE, endMin);
            long endTime = calendar.getTimeInMillis();
            long now = System.currentTimeMillis();
            if (startTime <= now && endTime >= now) {
                return true;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    public static String getTodayStr(long cur) {
        SimpleDateFormat simpleDateFormat1 = new SimpleDateFormat("yyyy-MM-dd");
        return simpleDateFormat1.format(new Date(cur));
    }

    public static String getTodayStrMMdd(long cur) {
        SimpleDateFormat simpleDateFormat1 = new SimpleDateFormat("MMdd");
        return simpleDateFormat1.format(new Date(cur));
    }

    public static int getMonthInt(long cur) {
        SimpleDateFormat simpleDateFormat1 = new SimpleDateFormat("MM");
        return Integer.parseInt(simpleDateFormat1.format(new Date(cur)));
    }

    public static long parseDate(String str, String format) {
        try {
            format = format == null ? "yyyy-MM-dd HH:mm:ss" : format;
            str = str.replace("：", ":");
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
            return simpleDateFormat.parse(str).getTime();
        } catch (Exception e) {
            throw new RuntimeException("时间格式错误：" + str, e);
        }
    }

    public static long parseDate(String str) {
        return parseDate(str, null);
    }

    /**
     * 返回2个日期之间的月数
     *
     * @param time1
     * @param time2
     * @return
     */
    public static int getMonthSpace(long time1, long time2) {
        Calendar calendar1 = Calendar.getInstance();
        Calendar calendar2 = Calendar.getInstance();
        calendar1.setTimeInMillis(time1);
        calendar2.setTimeInMillis(time2);

        int year = calendar1.get(Calendar.YEAR) - calendar2.get(Calendar.YEAR);
        int mounth = calendar1.get(Calendar.MONTH) - calendar2.get(Calendar.MONTH);

        int result = year * 12 + mounth;
        return Math.abs(result);
    }


    /**
     * 获取2个日期之间的天数
     *
     * @param time1
     * @param time2
     * @return 返回的是自然间隔天数
     */
    public static int getDaysBetween(long time1, long time2) {
        Calendar d1 = Calendar.getInstance();
        Calendar d2 = Calendar.getInstance();
        d1.setTimeInMillis(time1);
        d2.setTimeInMillis(time2);

        if (d1.after(d2)) {
            Calendar swap = d1;
            d1 = d2;
            d2 = swap;
        }
        int days = d2.get(Calendar.DAY_OF_YEAR) - d1.get(Calendar.DAY_OF_YEAR);
        int y2 = d2.get(Calendar.YEAR);
        if (d1.get(Calendar.YEAR) != y2) {
            d1 = (Calendar) d1.clone();
            do {
                days += d1.getActualMaximum(Calendar.DAY_OF_YEAR);
                d1.add(Calendar.YEAR, 1);
            } while (d1.get(Calendar.YEAR) != y2);
        }
        return Math.abs(days);
    }


    /**
     * 获取2个日期之间的天数
     *
     * @param time1
     * @param time2
     * @return 返回的是绝对时间间隔
     */
    public static int getDaysBetween1(long time1, long time2) {
        long remain = Math.abs(time1 - time2);
        return (int) (remain / dayMills);
    }

    /**
     * 获取当前是星期几
     *
     * @return 1-7代表星期一到日
     */
    public static int getDayOfWeek() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK) - 1;
        if (dayOfWeek == 0)
            dayOfWeek = 7;

        return dayOfWeek < 0 ? 0 : dayOfWeek;
    }

    /**
     * 获得指定日期是星期几
     *
     * @param date
     * @return 1-7代表星期一到日
     */
    public static int getDayOfWeekByDate(Date date) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK) - 1;
        if (dayOfWeek == 0)
            dayOfWeek = 7;

        return dayOfWeek < 0 ? 0 : dayOfWeek;
    }

    public static int getDayOfMonth() {
        return Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
    }

    /**
     * 获取两个时间间隔秒
     * 第一个格式 12:12
     *
     * @param time
     * @param compareTime
     * @return
     */
    public static long getIntervalSeconds(String time, long compareTime) {
        SimpleDateFormat SDF_FULL = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        SimpleDateFormat SDF_DAY = new SimpleDateFormat("yyyy-MM-dd");
        String fullTime = SDF_DAY.format(new Date()) + " " + time;

        try {
            return Math.abs((compareTime - SDF_FULL.parse(fullTime).getTime()) / 1000);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return 0;
    }

    /**
     * 获取两个时间间隔秒
     * 格式 12:12
     *
     * @param start
     * @param end
     * @return
     */
    public static long getIntervalSeconds(String start, String end) {
        SimpleDateFormat SDF_MINUTE = new SimpleDateFormat("HH:mm");
        try {
            return Math.abs((SDF_MINUTE.parse(end).getTime() - SDF_MINUTE.parse(start).getTime()) / 1000);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return 0;
    }

    /**
     * 输入时间 xx:xx 范围当前long
     *
     * @param time
     * @return
     */
    public static long getTimeMillsByTime(String time) {
        SimpleDateFormat SDF_FULL = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        SimpleDateFormat SDF_DAY = new SimpleDateFormat("yyyy-MM-dd");
        String fullTime = SDF_DAY.format(new Date()) + " " + time;

        try {
            return (SDF_FULL.parse(fullTime).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return 0;
    }

    /**
     * 获取当前周,周几的某一时刻
     *
     * @param whatDay   周几,传 1,2,3,4,5,6,7
     * @param mmhhssStr 时间格式 08:00:00
     * @return
     */
    public static long getAGivenTimeOfWeekDay(int whatDay, String mmhhssStr) {
        long now = System.currentTimeMillis();
        whatDay = whatDay - 1;
        long weekFristSecond = getWeekFirstSecond(now);
        String[] deltimes = mmhhssStr.split("\\:");
        long delTime = (Integer.parseInt(deltimes[0])) * hourMills + Integer.parseInt(deltimes[1]) * minuteMills + Integer.parseInt(deltimes[2]) * secondMills;
        return (whatDay * DateValidate.dayMills + weekFristSecond + delTime);
    }

    /**
     * 根据时间获取当前周几的mmhhss的毫秒值
     *
     * @param time      时间
     * @param whatDay   周几,传 1,2,3,4,5,6,7
     * @param mmhhssStr 时间格式 08:00:00
     * @return
     */
    public static long getAGivenTimeOfWeekDayByTime(long time, int whatDay, String mmhhssStr) {
        whatDay = whatDay - 1;
        long weekFristSecond = getWeekFirstSecond(time);
        String[] deltimes = mmhhssStr.split("\\:");
        long delTime = (Integer.parseInt(deltimes[0])) * hourMills + Integer.parseInt(deltimes[1]) * minuteMills + Integer.parseInt(deltimes[2]) * secondMills;
        return (whatDay * DateValidate.dayMills + weekFristSecond + delTime);
    }

    public static int getDaysUntilLastDayOfTheYear(long time) {
        Calendar lastDay = Calendar.getInstance();
        lastDay.set(Calendar.MONTH, 11);
        lastDay.set(Calendar.DAY_OF_MONTH, 31);
        return getDaysBetween(time, lastDay.getTimeInMillis());
    }

    public static void main(String[] args) {
        System.out.println(isLeapYear(967028928000L));
    }

    public static int getAge(String yyyyMMdd) {
        long birthday = parseDate(yyyyMMdd, "yyyyMMdd");
        Calendar calendar = Calendar.getInstance();
        if (calendar.before(birthday)) {
            return 0;
        }
        int yearNow = calendar.get(Calendar.YEAR);
        int monthNow = calendar.get(Calendar.MONTH);
        int dayNow = calendar.get(Calendar.DAY_OF_MONTH);
        calendar.setTimeInMillis(birthday);
        int yearBirth = calendar.get(Calendar.YEAR);
        int monthBirth = calendar.get(Calendar.MONTH);
        int dayBirth = calendar.get(Calendar.DAY_OF_MONTH);
        int age = yearNow - yearBirth;
        if (monthNow <= monthBirth) {
            if (monthNow == monthBirth) {
                if (dayNow < dayBirth) {
                    age--;
                }
            } else {
                age--;
            }
        }
        return age;
    }

    /**
     * 给出指定时间戳的时间点
     *
     * @param hour
     * @return
     */
    public static long getHourOfToday(int hour, long time) {
        Calendar c = Calendar.getInstance();
        c.setTimeInMillis(System.currentTimeMillis());
        c.set(Calendar.HOUR_OF_DAY, hour);
        c.set(Calendar.MINUTE, 0);
        c.set(Calendar.SECOND, 0);
        return c.getTimeInMillis();
    }

    public static boolean isLeapYear(long time) {
        Calendar c = Calendar.getInstance();
        c.setTimeInMillis(time);
        int year = c.get(Calendar.YEAR);
        if (year % 100 == 0) {
            return year % 400 == 0;
        }

        return year % 4 == 0;
    }
}
