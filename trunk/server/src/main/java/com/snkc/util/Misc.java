package com.snkc.util;

import java.math.BigDecimal;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

/**
 * 一些辅助性的数学方法
 *
 * @author HZS
 *
 */
public class Misc {

	/**
	 * 获取随机数 [ start, end ] 或 [ end, start ]
	 *
	 * @param start
	 *            起始值
	 * @param end
	 *            结束值
	 * @param random
	 *            随机数实体，可能某些功能要用到自己的Random实例，以保证绝对整体随机
	 * @return
	 */
	public static int getRandomBetween(final int start, final int end, Random random) {

		return end > start ? random.nextInt(end - start + 1) + start : random.nextInt(start - end + 1) + end;
	}

	/**
	 * 获取随机数 [ start, end ] 或 [ end, start ]
	 *
	 * @param start
	 *            起始值
	 * @param end
	 *            结束值
	 * @return
	 */
	public static int getRandomBetween(final int start, final int end) {

		return end > start ?
				ThreadLocalRandom.current().nextInt(end - start + 1) + start :
				ThreadLocalRandom.current().nextInt(start - end + 1) + end;
	}

	public static double getRandomBetween(final double start, final double end) {
		if (start == end) {
			return start;
		}
		return end > start ? ThreadLocalRandom.current().nextDouble(start, end) : ThreadLocalRandom.current().nextDouble(end, start);
	}

	/**
	 * 从集合中获取随机一个
	 *
	 * @param collections
	 * @return
	 */
	@SuppressWarnings("unchecked") public static <T> T getRandom(Collection<T> collections) {
		if (collections == null || collections.isEmpty()) {
			return null;
		}

		Object[] os = collections.toArray();
		int index = getRandomBetween(0, os.length - 1);
		return (T) os[index];
	}

	/**
	 * 获取随机百分整数
	 *
	 * @return [1, 100] 的随机数
	 */
	public static int getRatePercent() {

		return getRandomBetween(1, 100);
	}

	/**
	 * 检测百分数概率是否成功
	 *
	 * @param value
	 *            给定的概率
	 * @return
	 */
	public static boolean checkRatePercent(int value) {

		return value >= getRatePercent();
	}

	/**
	 * 获取以[0, base]内的概率随机数值 [base, 0]也没关系 :)
	 *
	 * @param base
	 * @return
	 */
	public static int getRateValue(int base) {

		return getRandomBetween(0, base);
	}

	public static int getRateValue(int base, Random random) {

		return getRandomBetween(0, base, random);
	}

	public static boolean checkRate(float rate) {
		return isZero(rate - 1F) ? true : checkRate(100, (int) (100 * rate));
	}

	/**
	 * 检测概率事件是否成功
	 *
	 * @param base
	 *            基数
	 * @param value
	 *            概率值
	 * @return
	 */
	public static boolean checkRate(int base, int value) {

		if (base <= 0) {
			return false;
		}
		//这里取到的tmp 范围是[0,base]也就是说有base+1个可取值,而不是[0,base-1]也就是base个可取的值
		int tmp = getRateValue(base - 1);
		return value > tmp;
	}

	public static boolean checkRate(int base, int value, Random random) {

		if (base < 0) {
			return false;
		}
		int tmp = getRateValue(base, random);
		return value > tmp;
	}

	/**
	 * 从 [min, max]中取出一组不重复的随机数
	 *
	 * @param min
	 * @param max
	 * @param num
	 *            个数
	 * @return
	 */
	public static List<Integer> getRandomValues(int min, int max, int num) {

		final List<Integer> list = new LinkedList<Integer>();
		if (max < 0) {
			return list;
		}
		if (num <= 0) {
			return list;
		}
		if (max < min) {
			return list;
		}

		if (num > (max - min + 1)) {
			num = max - min + 1;
		}

		for (int i = 0; i < num; ++i) {
			int val = getRandomBetween(min, max);
			while (list.contains(val)) {
				val = min + ((val + 1 - min) % (max - min + 1));
			}

			list.add(val);
		}

		return list;
	}

	/**
	 * 随机分配封装：将value随机分配为num份。
	 *
	 * @param value
	 *            需要随机分配的数值
	 * @param num
	 *            分配的份数
	 * @param result
	 *            分配的结果
	 * @author 李秀娟
	 */
	public static void randomDistribute(int value, int num, int[] result) {

		if (num <= 0) {
			return;
		}
		if (null == result || result.length < num) {
			return;
		}
		if (value <= 0) {
			result[0] = value;
			return;
		}
		final int[] r = new int[num + 1];
		r[0] = 0;
		r[num] = value;
		for (int i = 1; i <= num - 1; i++) {
			r[i] = ThreadLocalRandom.current().nextInt(value + 1);
		}
		Arrays.sort(r);
		for (int i = 0; i < num; i++) {
			result[i] = r[i + 1] - r[i];
		}
	}

	/**
	 * 返回一组概率中最后发生的那个概率.比如玩家做完任务后有30%概率获得物品A,30%概率
	 * 获得物品B,40%获得物品C.把概率作为数组传入,然后该方法返回数组的下标. 在上面的例子中,假如用户传入[30,30,40]
	 * 100,返回2，则表示玩家应获得物品C
	 *
	 * @param pros
	 *            概率数组,相加之和应该等于base，否则返回-1;
	 * @param base
	 *            概率单位,比如百分数就是100
	 * @return 数组下标, 对应某个概率在随机状态下发生
	 */
	public static int getProbability(int[] pros, int base) {

		if (pros == null || pros.length == 0) {
			return -1;
		}
		int sum = 0;
		for (int i = 0; i < pros.length; i++) {
			sum += pros[i];
		}
		// 相加之和应该等于base，否则返回getProbability(pros);
		if (sum != base) {
			return getProbability(pros);
		}
		int value = getRandomBetween(0, base - 1);

		for (int i = 0; i < pros.length; i++) {
			if (value < pros[i]) {
				return i;
			} else {
				value = value - pros[i];
			}
		}

		return -1;
	}

	/**
	 * 返回一组概率中最后发生的那个概率.比如玩家做完任务后有30%概率获得物品A,30%概率
	 * 获得物品B,40%获得物品C.把概率作为数组传入,然后该方法返回数组的下标. 在上面的例子中,假如用户传入[30,30,40]
	 * 100,返回2，则表示玩家应获得物品C
	 *
	 * @param pros
	 *            概率数组,相加之和应该等于base，否则返回-1;
	 * @param base
	 *            概率单位,比如百分数就是100
	 * @return 数组下标, 对应某个概率在随机状态下发生
	 */
	public static int getProbability(int[] pros, int base, Random random) {

		if (pros == null || pros.length == 0) {
			return -1;
		}
		int sum = 0;
		for (int i = 0; i < pros.length; i++) {
			sum += pros[i];
		}
		// 相加之和应该等于base，否则返回getProbability(pros);
		if (sum != base) {
			return getProbability(pros, random);
		}
		int value = getRandomBetween(0, base - 1, random);

		for (int i = 0; i < pros.length; i++) {
			if (value < pros[i]) {
				return i;
			} else {
				value = value - pros[i];
			}
		}

		return -1;
	}

	/**
	 * 和getProbability(int []pros,int base)类似,优点是不需要提供base,程序会把pros数组之和作为base
	 * 按照权重随机
	 * @param pros
	 * @return
	 */
	public static int getProbability(int[] pros) {

		if (pros == null || pros.length == 0) {
			return -1;
		}
		int sum = 0;
		for (int i = 0; i < pros.length; i++) {
			sum += pros[i];
		}
		if (sum <= 0) {
			return 0;
		}
		int value = getRandomBetween(0, sum - 1);

		for (int i = 0; i < pros.length; i++) {
			if (value < pros[i]) {
				return i;
			} else {
				value = value - pros[i];
			}
		}

		return -1;
	}

	/**
	 * 和getProbability(int []pros,int base)类似,优点是不需要提供base,程序会把pros数组之和作为base
	 * 按照权重随机
	 * @param pros
	 * @return
	 */
	public static int getProbability(Integer[] pros) {

		if (pros == null || pros.length == 0) {
			return -1;
		}
		int sum = 0;
		for (int i = 0; i < pros.length; i++) {
			sum += pros[i];
		}
		if (sum <= 0) {
			return 0;
		}
		int value = getRandomBetween(0, sum - 1);

		for (int i = 0; i < pros.length; i++) {
			if (value < pros[i]) {
				return i;
			} else {
				value = value - pros[i];
			}
		}

		return -1;
	}

	/**
	 * 和getProbability(int []pros,int base)类似,优点是不需要提供base,程序会把pros数组之和作为base
	 *
	 * @param pros
	 * @return
	 */
	public static int getProbability(int[] pros, Random random) {

		if (pros == null || pros.length == 0) {
			return -1;
		}
		int sum = 0;
		for (int i = 0; i < pros.length; i++) {
			sum += pros[i];
		}

		int value = getRandomBetween(0, sum - 1, random);

		for (int i = 0; i < pros.length; i++) {
			if (value < pros[i]) {
				return i;
			} else {
				value = value - pros[i];
			}
		}

		return -1;
	}

	/**
	 * 按照权重刷新
	 * @param prolist
	 * @param base
	 * @return
	 */
	public static int getProbability(List<Integer> prolist, int base) {

		final int[] probs = new int[prolist.size()];
		for (int i = 0; i < probs.length; i++) {
			probs[i] = prolist.get(i);
		}

		return getProbability(probs, base);
	}

	public static int getProbability(List<Integer> prolist) {

		final int[] probs = new int[prolist.size()];
		for (int i = 0; i < probs.length; i++) {
			probs[i] = prolist.get(i);
		}

		return getProbability(probs);
	}

	public static int getProbability(List<Integer> prolist, Random random) {

		final int[] probs = new int[prolist.size()];
		for (int i = 0; i < probs.length; i++) {
			probs[i] = prolist.get(i);
		}

		return getProbability(probs, random);
	}

	/**
	 * 根据概率获取 num个数值
	 *
	 * @param pros
	 *            每个整数出现的概率
	 * @param num
	 *            要取出的结果值数量
	 * @param base
	 *            根据基数
	 * @return
	 */
	public static int[] getValuesByRate(int[] pros, int num, int base) {

		final int[] ret = new int[num];
		for (int i = 0; i < num; i++) {
			ret[i] = getProbability(pros, base);
		}

		return ret;
	}

	public static List<Integer> getValuesByRate(List<Integer> pros, int num, int base) {

		final List<Integer> list = new ArrayList<Integer>();
		final int[] probs = new int[pros.size()];
		for (int i = 0; i < probs.length; i++) {
			probs[i] = pros.get(i);
		}

		for (int i = 0; i < num; i++) {
			list.add(getProbability(probs, base));
		}

		return list;
	}

	/**
	 * added by yesheng
	 * 获得一个不重复的随机序列.比如要从20个数中随机出6个不同的数字,可以先把20个数存入数组中,然后调用该方法.注意方法调用完后totals
	 * 里面的elements的顺序是变了的.适用于从一部分数中找出其中的绝大部分
	 *
	 * @param totals
	 *            所有数据存放在数组中
	 * @param dest
	 *            要返回的序列的长度
	 * @return 生成的序列以数组的形式返回
	 */
	public static int[] getRandomArray(int[] totals, int dest) {

		if (dest <= 0) {
			throw new IllegalArgumentException();
		}
		if (dest > totals.length) {
			return totals;
		}
		int[] ranArr = new int[dest];
		for (int i = 0; i < dest; i++) {
			// 得到一个位置
			int j = ThreadLocalRandom.current().nextInt(totals.length - i);
			ranArr[i] = totals[j];
			// 将未用的数字放到已经被取走的位置中,这样保证不会重复
			totals[j] = totals[totals.length - 1 - i];
		}
		return ranArr;
	}

	//这个方法和上边的一样，只是为了满足一些数组里装的是roleid  factionke什么的
	//比较麻烦 ，所以就抄了一遍
	public static Long[] getRandomArray2(Long[] srcArray, int dest) {

		if (dest <= 0) {
			throw new IllegalArgumentException();
		}
		if (dest > srcArray.length) {
			return srcArray;
		}
		Long[] ranArr = new Long[dest];
		for (int i = 0; i < dest; i++) {
			// 得到一个位置
			int j = ThreadLocalRandom.current().nextInt(srcArray.length - i);
			ranArr[i] = srcArray[j];
			// 将未用的数字放到已经被取走的位置中,这样保证不会重复
			srcArray[j] = srcArray[srcArray.length - 1 - i];
		}
		return ranArr;
	}

	/**
	 * 从一个集合中，随机选取几个，构成一个新的List
	 *
	 * @param collection 源集合
	 * @param num 随机选取的个数
	 * @return
	 */
	public static <T> List<T> getRandomList(Collection<T> collection, int num) {

		//如果集合小于需要的个数，则直接返回一个乱序的list
		if (collection.size() <= num) {
			List<T> result = new LinkedList<T>();
			result.addAll(collection);
			randomlizeList(result);
			return result;
		}

		int[] tmpArray = new int[collection.size()];
		for (int i = 0; i < tmpArray.length; i++) {
			tmpArray[i] = i;
		}
		int[] chosen = Misc.getRandomArray(tmpArray, num);
		Arrays.sort(chosen);
		List<T> result = new LinkedList<T>();
		int i = 0;
		int j = 0;
		for (T t : collection) {
			if (chosen[j] == i) {
				result.add(t);
				j++;
				if (j >= chosen.length) {
					break;
				}
			}
			i++;
		}
		return result;
	}

	/**
	 * 将一个list打乱
	 * @param <T>
	 * @param list
	 */
	public static <T> void randomlizeList(List<T> list) {
		for (int i = 1; i < list.size(); i++) {
			final int idx = getRandomBetween(0, i);
			if (i != idx) {
				T t = list.get(idx);
				list.set(idx, list.get(i));
				list.set(i, t);
			}
		}
	}

	/**
	 * 在一定范围内随机化数值
	 * 主要用于随机化伤害等，例如最终伤害随机为原始值的90%~110%
	 *
	 * @param value 初始值
	 * @param minPct 最小比例
	 * @param maxPct 最大比例
	 * @return 在范围随机后的值
	 */
	public static int randomValue(final int value, final double minPct, final double maxPct) {
		return getRandomBetween((int) (value * minPct), (int) (value * maxPct));
	}

	/**
	 * 生成一个不重复的随机整数序列
	 * @param min 最小值
	 * @param max 最大值
	 * @param step 值之间的间隔
	 * @param retsize 返回序列的长度
	 * @return
	 */
	public static List<Integer> getRandomNotRepeatIntList(int min, int max, int step, int retsize) {
		if (max < min || step <= 0 || (max - min + 1) / step < retsize) {
			throw new IllegalArgumentException("错误的参数");
		}
		List<Integer> ret = new ArrayList<Integer>();
		int size = (max - min + 1) / step;
		Map<Integer, Integer> swaps = new HashMap<Integer, Integer>();
		for (int i = 0; i < retsize; i++) {
			int idx = getRandomBetween(i, size - 1);
			Integer curval = swaps.get(i);
			if (curval == null) {
				curval = i * step + min;
			}
			if (idx == i) {
				ret.add(curval);
				continue;
			}
			Integer swapval = swaps.get(idx);
			if (swapval == null) {
				swapval = idx * step + min;
			}
			if (idx > i) {
				swaps.put(idx, curval);
			}
			ret.add(swapval);
		}
		return ret;
	}

	public static int compareTo(float o1, float o2) {
		return ((int) (o1 * 1000)) - ((int) (o2 * 1000));
	}

	/**
	 * 获得名字字符串
	 *
	 * @param strList
	 * @param symbol
	 * @return
	 */
	public static String makeNameStr(List<String> strList, Character symbol) {
		StringBuilder sb = new StringBuilder("");
		for (String str : strList) {
			if (sb.length() > 0) {
				sb.append(symbol);
			}

			sb.append(str);
		}

		return sb.toString();
	}

	/**
	 * 返回一组概率中最后发生的那个概率.比如玩家做完任务后有10%概率获得物品A,20%概率
	 * 获得物品B,30%获得物品C,40%不获得任何物品.把概率作为数组传入,然后该方法返回数组的下标. 在上面的例子中,假如用户传入[10,20,30]
	 * 100,返回2，则表示玩家应获得物品C
	 * @param pros
	 * @param base
	 * @return
	 */
	public static int getProbabilityWithBiggerBase(Integer[] pros, int base) {
		if (pros == null || pros.length == 0) {
			return -1;
		}
		int sum = 0;
		for (int i = 0; i < pros.length; i++) {
			sum += pros[i];
		}
		// 相加之和应该等于base，否则返回getProbability(pros);
		if (sum >= base) {
			base = sum;
		}
		int value = getRandomBetween(0, base - 1);
		for (int i = 0; i < pros.length; i++) {
			if (value < pros[i]) {
				return i;
			} else {
				value = value - pros[i];
			}
		}
		return -1;
	}

	/**
	 * 从total个数中随机选出n个数
	 *
	 * @param n
	 * @param total
	 * @return
	 */
	public static List<Integer> getRandomList(int n, int total) {
		List<Integer> res = new ArrayList<Integer>();
		if (n > total) {
			return res;
		}

		Random rm = new Random();
		int counter = 0;
		while (res.size() < n) {
			if (counter > n * 50) {
				throw new RuntimeException("MISC.getRandomList方法调用次数过多！！！");
			}
			counter++;
			int r = rm.nextInt(100000) % total + 1;
			if (!res.contains(r)) {
				res.add(r);
			}
		}
		return res;
	}

	public static void main(String[] args) {
		List<Integer> array = getRandomNotRepeatIntList(1, 100, 10, 100);
		for (int i = 0; i < array.size(); i++) {
			System.out.println(array.get(i));
		}
	}

	public static float formatFloat(float value, int scale) {
		return (((long) (value * Math.pow(10, scale))) * (float) Math.pow(10, -scale));
	}

	public static float formatFloat2(float value, int scale) {
		BigDecimal bd = new BigDecimal(value);
		bd = bd.setScale(scale, BigDecimal.ROUND_HALF_UP); // 4代表四舍五入模式
		return bd.floatValue();
	}

	/**
	 * 注意这里求的是v的开方之后的倒数
	 * @param v
	 * @return
	 */
	public static float invSqrt(float v) {
		if (v == 0.0f) {
			return 0.0f;
		}
		float vHalf = 0.5f * v;
		int i = Float.floatToIntBits(v);
		i = 0x5f3759df - (i >> 1);
		v = Float.intBitsToFloat(i);
		v *= (1.5f - vHalf * v * v);
		return v;
	}

	/**
	 * 对V开方，取的是近似值，效率比Math.sqrt要高，但是精确度上要有取舍
	 * @param v
	 * @return
	 */
	public static float sqrt(float v) {
		if (v == 0.0f) {
			return 0.0f;
		}
		return 1.0f / invSqrt(v);
	}

	/**
	 * 注意这里求的是v的开方之后的倒数，这里要比Java原生的取值以后取倒数要快
	 * @param v
	 * @return
	 */
	public static double invSqrt(double v) {
		if (v == 0d) {
			return 0d;
		}
		double vHalf = 0.5d * v;
		long i = Double.doubleToLongBits(v);
		i = 0x5fe6ec85e7de30daL - (i >> 1);
		v = Double.longBitsToDouble(i);
		v *= (1.5d - vHalf * v * v);
		return v;
	}

	/**
	 * 对V开方，在double的计算上，java原生的比FAST INVERSE SQUARE ROOT取倒数要快
	 * @param v
	 * @return
	 */
	public static double sqrt(double v) {
		if (v == 0d) {
			return 0d;
		}
		return Math.sqrt(v);
	}

	/** 单精度浮点型0值比较时的偏移量 */
	public static final float ZERO_OFFSET = 0.000001f;

	/** 单精度浮点型的零值判断 */
	public static boolean isZero(float v) {
		return -ZERO_OFFSET < v && v < ZERO_OFFSET;
	}

	public static String getRamdonToken() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}

}
