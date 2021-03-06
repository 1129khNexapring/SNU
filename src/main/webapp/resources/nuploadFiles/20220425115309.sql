-- EMPLOYEE
SELECT EMP_ID, EMP_NAME, DEPT_CODE
FROM EMPLOYEE;
SELECT EMP_ID, EMP_NAME, DEPT_CODE, DEPT_TITLE
FROM EMPLOYEE JOIN DEPARTMENT ON DEPT_CODE = DEPT_ID;
-- DEPARTMENT, JOB
SELECT EMP_ID, EMP_NAME, EMPLOYEE.JOB_CODE, JOB_NAME
FROM EMPLOYEE JOIN JOB ON EMPLOYEE.JOB_CODE = JOB.JOB_CODE;
SELECT EMP_ID, EMP_NAME, E.JOB_CODE, JOB_NAME
FROM EMPLOYEE E JOIN JOB J ON E.JOB_CODE = J.JOB_CODE;
-- 1. 언제 조인을 하는가?
-- 2. 어떻게 조인을 하는가?

-- 다중조인
-- EMPLOYEE, DEPARTMENT, LOCATION
-- EMP_ID, EMP_NAME, DEPT_CODE, DEPT_TITLE, LOCAL_NAME
SELECT EMP_ID, EMP_NAME, DEPT_CODE, DEPT_TITLE, LOCAL_NAME
FROM EMPLOYEE 
JOIN DEPARTMENT ON DEPT_CODE = DEPT_ID
JOIN LOCATION ON LOCATION_ID = LOCAL_CODE;

-- SET OPERATOR
-- UNION
-- 1. 컬럼의 갯수와 타입이 맞아야 함
SELECT EMP_ID, EMP_NAME, DEPT_CODE, SALARY
FROM EMPLOYEE
WHERE DEPT_CODE = 'D5'
UNION ALL
SELECT EMP_ID, EMP_NAME, DEPT_CODE, SALARY
FROM EMPLOYEE
WHERE SALARY > 3000000;

-- 70년대 생 여자 전씨, 사원 이름, 주민번호, 부서명, 직급
SELECT EMP_NAME, EMP_NO, DEPT_TITLE, JOB_NAME
FROM EMPLOYEE
JOIN DEPARTMENT ON DEPT_CODE = DEPT_ID
JOIN JOB ON EMPLOYEE.JOB_CODE = JOB.JOB_CODE
WHERE EMP_NAME LIKE '전%'
AND SUBSTR(EMP_NO, 8, 1) = 2
AND EMP_NO LIKE '7%';
--AND SUBSTR(EMP_NO, 1, 2) >= 70 AND SUBSTR(EMP_NO, 1, 2) < 80;

-- 가장 막내, 사원코드, 나이, 부서명, 직급명 조회
SELECT 
    EMP_ID, 
    EMP_NAME, 
    EXTRACT(YEAR FROM SYSDATE)-EXTRACT(YEAR FROM TO_DATE(SUBSTR(EMP_NO,1,2), 'RR')) "나이",
    DEPT_TITLE, 
    JOB_NAME
FROM EMPLOYEE
JOIN DEPARTMENT ON DEPT_CODE = DEPT_ID
JOIN JOB ON EMPLOYEE.JOB_CODE = JOB.JOB_CODE
WHERE EXTRACT(YEAR FROM SYSDATE)-EXTRACT(YEAR FROM TO_DATE(SUBSTR(EMP_NO,1,2), 'RR'))
= (SELECT 
    MIN(EXTRACT(YEAR FROM SYSDATE)-EXTRACT(YEAR FROM TO_DATE(SUBSTR(EMP_NO,1,2), 'RR'))) 
    FROM EMPLOYEE);
SELECT TO_DATE(SUBSTR(EMP_NO,1,2), 'YY') FROM EMPLOYEE;
-- 19 -> 2019, 55 -> 2055
SELECT TO_DATE(SUBSTR(EMP_NO,1,2), 'RR') FROM EMPLOYEE;
-- 00 ~ 49, 50 ~ 99,
-- 19 -> 2019, 81 -> 1981

-- 형이 들어간 사람
SELECT EMP_ID, EMP_NAME, JOB_NAME
FROM EMPLOYEE
--JOIN JOB ON EMPLOYEE.JOB_CODE = JOB.JOB_CODE
JOIN JOB USING(JOB_CODE)
WHERE EMP_NAME LIKE '%형%';

-- 4번문제
-- WHERE DEPT_CODE = 'D5' OR DEPT_CODE = 'D6'
-- WHERE DEPT_CODE IN ('D5', 'D6')

-- 5번문제
-- WHERE BONUS
SELECT * FROM EMPLOYEE
WHERE BONUS IS NOT NULL;

-- 6번 문제
-- 다중조인 설명 동일

-- 7번 문제
SELECT EMP_NAME "이름", DEPT_TITLE, LOCAL_NAME, NATIONAL_NAME
FROM EMPLOYEE
JOIN DEPARTMENT D ON DEPT_CODE = DEPT_ID
JOIN LOCATION L ON LOCATION_ID = LOCAL_CODE
JOIN NATIONAL N USING(NATIONAL_CODE)
-- JOIN NATIONAL N L.NATIONAL_CODE = N.NATIONAL_CODE
WHERE NATIONAL_NAME IN ('한국', '일본');

-- 9번문제
-- NVL : null -> 0
SELECT EMP_NAME, SALARY 
FROM EMPLOYEE
WHERE JOB_CODE IN ('J4', 'J7')
--AND NVL(BONUS, 0) = 0;
AND BONUS IS NULL;

-- 연봉이 높은 다섯명
SELECT * FROM
(SELECT 
    EMP_ID, 
    EMP_NAME, 
    SALARY*12 + SALARY*NVL(BONUS,0) "연봉",
    RANK() OVER(ORDER BY SALARY*12 + SALARY*NVL(BONUS,0) DESC) "순위",
    DEPT_TITLE,
    JOB_NAME,
    HIRE_DATE
FROM EMPLOYEE
JOIN DEPARTMENT ON DEPT_CODE = DEPT_ID
JOIN JOB USING(JOB_CODE))
WHERE "순위" <= 5;

-- 8번, 11번, 12번, 13번

-- 12번, SUM 함수, OUTER JOIN
-- 1. JOIN을 이용해서 부서명 구함
-- 2. 부서별 급여 합계 SUM -> 오류
-- 3. GROUP BY 작성으로 부서별 합계 출력
SELECT DEPT_TITLE, SUM(SALARY)
FROM EMPLOYEE
LEFT JOIN DEPARTMENT ON (DEPT_CODE = DEPT_ID)
GROUP BY DEPT_TITLE;

-- 13번, SUM, AVG
WITH SUM_SAL AS (SELECT SUM(SALARY) FROM EMPLOYEE),
    AVG_SAL AS (SELECT AVG(SALARY) FROM EMPLOYEE)
SELECT * FROM SUM_SAL
UNION
SELECT * FROM AVG_SAL;

-- 11번
-- JOIN + HAVING
SELECT DEPT_TITLE, SUM(SALARY)
FROM EMPLOYEE
JOIN DEPARTMENT ON (DEPT_CODE = DEPT_ID)
GROUP BY DEPT_TITLE
HAVING SUM(SALARY) > (SELECT SUM(SALARY)*0.2 FROM EMPLOYEE);
-- HAVING -> WHERE (인라인뷰 이용)
SELECT *
FROM (SELECT DEPT_TITLE, SUM(SALARY) "SSAL"
FROM EMPLOYEE
JOIN DEPARTMENT ON (DEPT_CODE = DEPT_ID)
GROUP BY DEPT_TITLE)
WHERE SSAL > (SELECT SUM(SALARY)*0.2 FROM EMPLOYEE);
-- WITH 사용
WITH TOTAL_SAL AS (SELECT DEPT_TITLE, SUM(SALARY) "SSAL"
                    FROM EMPLOYEE
                    JOIN DEPARTMENT ON (DEPT_CODE = DEPT_ID)
                    GROUP BY DEPT_TITLE)
SELECT *
FROM TOTAL_SAL
WHERE SSAL > (SELECT SUM(SALARY)*0.2 FROM EMPLOYEE);

-- 8번, 셀프조인
SELECT D.EMP_NAME, E.DEPT_CODE, E.EMP_NAME
FROM EMPLOYEE E
JOIN EMPLOYEE D ON (E.DEPT_CODE = D.DEPT_CODE)
WHERE E.EMP_NAME != D.EMP_NAME
ORDER BY 1;







