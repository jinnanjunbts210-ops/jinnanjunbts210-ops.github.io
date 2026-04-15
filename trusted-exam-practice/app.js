const STORAGE_KEY = "trusted_exam_practice_web_v3";
const REVIEW_INTERVAL_DAYS = [1, 3, 7, 14, 30];
const RESULTS = new Set(["AC", "WA", "TLE", "RE", "SKIP"]);
const DIFFICULTIES = new Set(["easy", "medium", "hard"]);
const JUDGE0_LANGUAGES_URL = "https://ce.judge0.com/languages/all";
const JUDGE0_SUBMISSIONS_URL =
  "https://ce.judge0.com/submissions/?base64_encoded=false&wait=true";
const PREFERRED_CPP_LANGUAGE_IDS = [105, 54, 53, 52, 76];
const COMPILER_SERVICE_LABEL = "C++ / Judge0 CE";
const COMPILER_LAYOUT_STORAGE_KEY = "trusted_exam_compiler_layout_v1";
const COMPILER_PANEL_MIN_PERCENT = 30;
const COMPILER_PANEL_MAX_PERCENT = 48;
const COMPILER_STACK_BREAKPOINT = 920;
const PHOTO_STORAGE_KEY = "trusted_exam_photo_inbox_v1";
const PHOTO_STATUSES = new Set(["incoming", "processed", "archived"]);
const TRUSTED_EXAM_SHARED_HEADER = [
  "/*",
  " * Copyright (c) Huawei Technologies Co., Ltd. 2019. All rights reserved.",
  " * Description: \u4e0a\u673a\u7f16\u7a0b\u8ba4\u8bc1",
  " * Caution: \u672c\u5730\u8c03\u8bd5\u65f6\uff0c\u53ea\u7f16\u8bd1\u8fd0\u884cmain.cpp\u6587\u4ef6\uff0c\u4e0d\u8981\u94fe\u63a5\u8fd9\u4e2a\u6587\u4ef6\uff01\u56e0\u4e3a\u672c\u6587\u4ef6\u5df2\u7ecf\u88abmain.cpp\u6587\u4ef6include\u4e86",
  " */",
].join("\n");

const GENERIC_CPP_TEMPLATE = [
  "#include <bits/stdc++.h>",
  "using namespace std;",
  "",
  "int main() {",
  "  ios::sync_with_stdio(false);",
  "  cin.tie(nullptr);",
  "",
  "  // TODO: write your solution here.",
  "",
  "  return 0;",
  "}",
].join("\n");

const LEGACY_KX001_STARTER_CODE = [
  "#include <bits/stdc++.h>",
  "using namespace std;",
  "",
  "long long countValidIntervals(const vector<int>& records, int minLen, int maxLen, int threshold) {",
  "  long long answer = 0;",
  "  // TODO: implement your solution.",
  "  return answer;",
  "}",
  "",
  "int main() {",
  "  ios::sync_with_stdio(false);",
  "  cin.tie(nullptr);",
  "",
  "  int n;",
  "  cin >> n;",
  "  vector<int> records(n);",
  "  for (int i = 0; i < n; ++i) {",
  "    cin >> records[i];",
  "  }",
  "",
  "  int minLen, maxLen;",
  "  int threshold;",
  "  cin >> minLen >> maxLen;",
  "  cin >> threshold;",
  "",
  "  cout << countValidIntervals(records, minLen, maxLen, threshold) << '\\n';",
  "  return 0;",
  "}",
].join("\n");

const LEGACY_KX001_SAMPLE_INPUT = ["5", "2 0 2 0 2", "2 4", "1"].join("\n");

const DEFAULT_BANK_COLUMNS = [
  {
    id: "array_string",
    name: "Array/String",
    keywords: ["array", "string", "prefix sum", "simulation"],
    description: "Fundamental linear data processing.",
    problemIds: [],
  },
  {
    id: "hashing",
    name: "Hashing",
    keywords: ["hash", "hash table", "set", "map", "dictionary"],
    description: "Frequency maps and lookup acceleration.",
    problemIds: [],
  },
  {
    id: "two_pointers_window",
    name: "TwoPointers/Window",
    keywords: ["two pointers", "sliding window", "fast slow pointers"],
    description: "Window and dual-index scanning patterns.",
    problemIds: [],
  },
  {
    id: "stack_queue",
    name: "Stack/Queue",
    keywords: ["stack", "queue", "monotonic stack", "monotonic queue"],
    description: "Order-sensitive processing and monotonic structures.",
    problemIds: [],
  },
  {
    id: "binary_search",
    name: "BinarySearch",
    keywords: ["binary search"],
    description: "Boundary search and answer binary search.",
    problemIds: [],
  },
  {
    id: "linked_list",
    name: "LinkedList",
    keywords: ["linked list"],
    description: "Pointer operations and node rearrangement.",
    problemIds: [],
  },
  {
    id: "tree",
    name: "Tree",
    keywords: ["tree", "binary tree", "bst", "trie"],
    description: "Traversal and recursion on trees.",
    problemIds: [],
  },
  {
    id: "graph",
    name: "Graph",
    keywords: ["graph", "topological sort", "union find", "shortest path", "bfs", "dfs"],
    description: "Connectivity and traversal on graph structures.",
    problemIds: [],
  },
  {
    id: "backtracking",
    name: "Backtracking",
    keywords: ["backtracking", "subset", "combination", "permutation"],
    description: "Search space generation with pruning.",
    problemIds: [],
  },
  {
    id: "dynamic_programming",
    name: "DynamicProgramming",
    keywords: ["dp", "dynamic programming", "memoization"],
    description: "State transitions and optimal substructure.",
    problemIds: [],
  },
  {
    id: "greedy",
    name: "Greedy",
    keywords: ["greedy"],
    description: "Locally optimal choices and proof patterns.",
    problemIds: [],
  },
  {
    id: "intervals_sorting",
    name: "Intervals/Sorting",
    keywords: ["interval", "sorting", "sweep line"],
    description: "Range merges, ordering, and event sweep.",
    problemIds: [],
  },
];

const DEMO_PROBLEMS = [
  {
    id: "LC-15",
    title: "3Sum",
    difficulty: "medium",
    tags: ["array", "two pointers"],
    url: "https://leetcode.com/problems/3sum/",
    source: "leetcode",
  },
  {
    id: "LC-56",
    title: "Merge Intervals",
    difficulty: "medium",
    tags: ["array", "sorting", "interval"],
    url: "https://leetcode.com/problems/merge-intervals/",
    source: "leetcode",
  },
  {
    id: "LC-146",
    title: "LRU Cache",
    difficulty: "medium",
    tags: ["linked list", "design", "hash table"],
    url: "https://leetcode.com/problems/lru-cache/",
    source: "leetcode",
  },
];

const BUILTIN_PROBLEMS = [
  {
    id: "KX-001",
    title: "[\u8f6f\u4ef6\u8ba4\u8bc1] \u78c1\u76d8\u7a7a\u95f4\u7edf\u8ba1",
    difficulty: "medium",
    tags: ["array", "prefix sum", "sliding window", "statistics"],
    url: "",
    source: "\u53ef\u4fe1\u8003\u8bd5",
    editorMode: "solution_class",
    solutionEntry: "CountIntervals",
    description: [
      "\u67d0\u53f0\u73b0\u7f51\u8bbe\u5907\u6bcf\u5929\u90fd\u4f1a\u4ea7\u751f\u5927\u91cf\u65e5\u5fd7\uff0c\u8fd9\u4e9b\u65e5\u5fd7\u4f1a\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\u5e76\u6309\u89c4\u5219\u81ea\u52a8\u6e05\u7406\uff0c\u56e0\u6b64\u6bcf\u5929\u7684\u78c1\u76d8\u5360\u7528\u91cf\u90fd\u5728\u53d8\u5316\u3002",
      "\u5df2\u77e5\u6570\u7ec4 records \u8bb0\u5f55\u4e86\u6bcf\u5929\u7684\u78c1\u76d8\u7a7a\u95f4\u5360\u7528\uff08MB\uff09\u3002\u8bf7\u7edf\u8ba1\u540c\u65f6\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u7684\u5b50\u533a\u95f4\u4e2a\u6570\uff1a",
      "1. \u533a\u95f4\u957f\u5ea6\u5728 [minLen, maxLen] \u5185\u3002\n2. \u533a\u95f4\u5e73\u5747\u503c\u5927\u4e8e\u7b49\u4e8e threshold\u3002",
      "\u4f60\u53ea\u9700\u8981\u5b8c\u6210 Solution::CountIntervals\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6ce8\u5165 main \u548c\u672c\u5730\u6d4b\u8bd5\u6846\u67b6\u3002",
      "\u672c\u5730\u6d4b\u8bd5\u8f93\u5165\u683c\u5f0f\uff1a\n\u7b2c 1 \u884c records\uff0c\u4f8b\u5982 [2, 0, 2, 0, 2]\n\u7b2c 2 \u884c lengthRange\uff0c\u4f8b\u5982 [2, 4]\n\u7b2c 3 \u884c threshold\uff0c\u4f8b\u5982 1",
    ].join("\n\n"),
    sampleInput: ["[2, 0, 2, 0, 2]", "[2, 4]", "1"].join("\n"),
    sampleOutput: "8",
    starterCode: [
      "/*",
      " * Copyright (c) Trusted Exam Platform.",
      " * Description: complete the method below only.",
      " * main() and local runner are injected automatically.",
      " */",
      "",
      "#include <vector>",
      "#include <utility>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  int CountIntervals(const vector<int>& records,",
      "                     const pair<int, int>& lengthRange,",
      "                     int threshold) {",
      "    int answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "string trim(const string& text) {",
      "  size_t left = text.find_first_not_of(\" \\t\\r\\n\");",
      "  if (left == string::npos) return \"\";",
      "  size_t right = text.find_last_not_of(\" \\t\\r\\n\");",
      "  return text.substr(left, right - left + 1);",
      "}",
      "",
      "vector<int> parseList(const string& text) {",
      "  vector<int> values;",
      "  int sign = 1;",
      "  long long current = 0;",
      "  bool inNumber = false;",
      "  for (char ch : text) {",
      "    if (ch == '-') {",
      "      sign = -1;",
      "      current = 0;",
      "      inNumber = true;",
      "    } else if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      values.push_back(static_cast<int>(sign * current));",
      "      sign = 1;",
      "      current = 0;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  if (inNumber) {",
      "    values.push_back(static_cast<int>(sign * current));",
      "  }",
      "  return values;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string recordsLine;",
      "  string rangeLine;",
      "  string thresholdLine;",
      "",
      "  while (recordsLine.empty() && getline(cin, recordsLine)) {}",
      "  while (rangeLine.empty() && getline(cin, rangeLine)) {}",
      "  while (thresholdLine.empty() && getline(cin, thresholdLine)) {}",
      "",
      "  vector<int> records = trusted_exam_runner::parseList(recordsLine);",
      "  vector<int> range = trusted_exam_runner::parseList(rangeLine);",
      "  int threshold = stoi(trusted_exam_runner::trim(thresholdLine));",
      "  pair<int, int> lengthRange = {range.at(0), range.at(1)};",
      "",
      "  Solution solver;",
      "  auto answer = solver.CountIntervals(records, lengthRange, threshold);",
      "  cout << answer << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-002",
    title: "[\u8f6f\u4ef6\u8ba4\u8bc1] \u5b57\u7b26\u6392\u5e8f",
    difficulty: "medium",
    tags: ["string", "sorting", "simulation"],
    url: "",
    source: "\u53ef\u4fe1\u8003\u8bd5",
    editorMode: "solution_class",
    solutionEntry: "CharacterSort",
    description: [
      "\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4ec5\u5305\u542b\u82f1\u6587\u5b57\u6bcd\u548c\u6570\u5b57\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u89c4\u5219\u5bf9\u5176\u8fdb\u884c\u6392\u5e8f\uff1a",
      "1. \u6392\u5e8f\u540e\uff0c\u539f\u4f4d\u7f6e\u662f\u6570\u5b57\u7684\uff0c\u6392\u5e8f\u540e\u4ecd\u7136\u662f\u6570\u5b57\uff1b\u539f\u4f4d\u7f6e\u662f\u5b57\u6bcd\u7684\uff0c\u6392\u5e8f\u540e\u4ecd\u7136\u662f\u5b57\u6bcd\u3002",
      "2. \u6570\u5b57\u6309 0-9 \u5347\u5e8f\u3002",
      "3. \u82f1\u6587\u5b57\u6bcd\u4e2d\uff0c\u5927\u5199\u5b57\u6bcd\u5927\u4e8e\u5c0f\u5199\u5b57\u6bcd\uff1b\u5c0f\u5199\u5b57\u6bcd\u6309 a-z \u5347\u5e8f\uff0c\u5927\u5199\u5b57\u6bcd\u6309 A-Z \u5347\u5e8f\u3002",
      "\u89e3\u7b54\u8981\u6c42\uff1a\n\u65f6\u95f4\u9650\u5236\uff1aC/C++ 1000ms\uff0c\u5176\u4ed6\u8bed\u8a00 2000ms\n\u5185\u5b58\u9650\u5236\uff1aC/C++ 64MB\uff0c\u5176\u4ed6\u8bed\u8a00 128MB",
      "\u8f93\u5165\uff1a\n\u8f93\u5165\u4e3a\u5b57\u7b26\u4e32 inputStr\uff0c1 <= inputStr.length < 1000\uff0c\u5b57\u7b26\u4e32\u4e2d\u4e0d\u4f1a\u51fa\u73b0\u9664\u82f1\u6587\u5b57\u6bcd\u3001\u6570\u5b57\u4ee5\u5916\u7684\u522b\u7684\u5b57\u7b26\u3002",
      "\u8f93\u51fa\uff1a\n\u8f93\u51fa\u6392\u5e8f\u540e\u7684\u5b57\u7b26\u4e32\u3002",
      "\u6837\u4f8b 1\uff1a\n\u8f93\u5165\uff1aa2CB1c\n\u8f93\u51fa\uff1aa1cB2C",
      "\u6837\u4f8b 2\uff1a\n\u8f93\u5165\uff1aab12C4Ac3B\n\u8f93\u51fa\uff1aab12c3AB4C",
      "\u4f60\u53ea\u9700\u8981\u5b8c\u6210 Solution::CharacterSort\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6ce8\u5165 main \u548c\u672c\u5730\u6d4b\u8bd5\u6846\u67b6\u3002",
    ].join("\n\n"),
    sampleInput: "a2CB1c",
    sampleOutput: "a1cB2C",
    starterCode: [
      "#include <algorithm>",
      "#include <cctype>",
      "#include <string>",
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  string CharacterSort(const string& inputStr) {",
      "    string answer;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string inputStr;",
      "  while (inputStr.empty() && getline(cin, inputStr)) {}",
      "",
      "  Solution solver;",
      "  cout << solver.CharacterSort(inputStr) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-003",
    title: "[\u8f6f\u4ef6\u8ba4\u8bc1] \u6bd4\u7279\u7ffb\u8f6c",
    difficulty: "medium",
    tags: ["array", "sliding window", "binary"],
    url: "",
    source: "\u53ef\u4fe1\u8003\u8bd5",
    editorMode: "solution_class",
    solutionEntry: "LongestTargetAfterFlip",
    description: [
      "\u5de5\u7a0b\u5e08\u5c0fA\u5bf9\u4e8c\u8fdb\u5236\u7801\u6d41 bits \u8fdb\u884c\u9a8c\u8bc1\u3002\u7ed9\u5b9a\u76ee\u6807\u503c target\uff080 \u6216 1\uff09\uff0c\u6700\u591a\u53ef\u4ee5\u53cd\u8f6c bits \u4e2d\u7684\u4e00\u4f4d\uff0c\u4ee5\u83b7\u53d6\u6700\u5927\u8fde\u7eed target \u7684\u4e2a\u6570\uff0c\u8bf7\u8fd4\u56de\u8fd9\u4e2a\u6570\u3002",
      "\u8f93\u5165\uff1a\n\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a target\uff0c\u503c\u4ec5\u4e3a 0 \u6216 1\u3002\n\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a bits\uff0c1 <= bits.length <= 10000\uff0cbits[i] \u503c\u4ec5\u4e3a 0 \u6216 1\u3002",
      "\u8f93\u51fa\uff1a\n\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6700\u5927\u8fde\u7eed target \u7684\u4e2a\u6570\u3002",
      "\u6837\u4f8b 1\uff1a\n\u8f93\u5165\uff1a1\n[0, 1, 1, 0, 1, 0, 1, 0, 0]\n\u8f93\u51fa\uff1a4",
      "\u6837\u4f8b 2\uff1a\n\u8f93\u5165\uff1a0\n[0, 0, 0, 0, 0, 0, 0, 0]\n\u8f93\u51fa\uff1a8",
      "\u4f60\u53ea\u9700\u8981\u5b8c\u6210 Solution::LongestTargetAfterFlip\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6ce8\u5165 main \u548c\u672c\u5730\u6d4b\u8bd5\u6846\u67b6\u3002",
    ].join("\n\n"),
    sampleInput: ["1", "[0, 1, 1, 0, 1, 0, 1, 0, 0]"].join("\n"),
    sampleOutput: "4",
    starterCode: [
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  int LongestTargetAfterFlip(int target, const vector<int>& bits) {",
      "    int answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "string trim(const string& text) {",
      "  size_t left = text.find_first_not_of(\" \\t\\r\\n\");",
      "  if (left == string::npos) return \"\";",
      "  size_t right = text.find_last_not_of(\" \\t\\r\\n\");",
      "  return text.substr(left, right - left + 1);",
      "}",
      "",
      "vector<int> parseList(const string& text) {",
      "  vector<int> values;",
      "  int sign = 1;",
      "  long long current = 0;",
      "  bool inNumber = false;",
      "  for (char ch : text) {",
      "    if (ch == '-') {",
      "      sign = -1;",
      "      current = 0;",
      "      inNumber = true;",
      "    } else if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      values.push_back(static_cast<int>(sign * current));",
      "      sign = 1;",
      "      current = 0;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  if (inNumber) {",
      "    values.push_back(static_cast<int>(sign * current));",
      "  }",
      "  return values;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string targetLine;",
      "  string bitsLine;",
      "",
      "  while (targetLine.empty() && getline(cin, targetLine)) {}",
      "  while (bitsLine.empty() && getline(cin, bitsLine)) {}",
      "",
      "  int target = stoi(trusted_exam_runner::trim(targetLine));",
      "  vector<int> bits = trusted_exam_runner::parseList(bitsLine);",
      "",
      "  Solution solver;",
      "  cout << solver.LongestTargetAfterFlip(target, bits) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-004",
    title: "[\u8f6f\u4ef6\u8ba4\u8bc1] \u6700\u4f73\u5347\u7ea7\u65f6\u95f4\u7a97",
    difficulty: "medium",
    tags: ["array", "sliding window", "prefix sum", "circular array"],
    url: "",
    source: "\u53ef\u4fe1\u8003\u8bd5",
    editorMode: "solution_class",
    solutionEntry: "BestUpgradeWindow",
    description: [
      "\u4e3a\u51cf\u5c0f\u7cfb\u7edf\u5347\u7ea7\u5bf9\u7528\u6237\u7684\u5f71\u54cd\uff0c\u9700\u6839\u636e\u7cfb\u7edf\u8fc7\u53bb\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u6bcf\u5c0f\u65f6\u5e73\u5747\u8bbf\u95ee\u6570\u636e\uff0c\u9884\u6d4b\u6700\u4f73\u5347\u7ea7\u65f6\u95f4\u7a97\u3002",
      "\u7ed9\u5b9a\u5bb9\u91cf cap \u548c\u957f\u5ea6\u4e3a 168\uff087*24\uff09\u7684\u6574\u6570\u6570\u7ec4 visitCnt\uff0c\u8868\u793a\u4e00\u4e2a\u5468\u671f\u5185\u6bcf\u5c0f\u65f6\u7684\u7528\u6237\u8bbf\u95ee\u91cf\u3002\u5347\u7ea7\u65f6\u95f4\u7a97\u9009\u62e9\u89c4\u5219\u5982\u4e0b\uff1a",
      "1. \u65f6\u95f4\u7a97\u5185\u7d2f\u8ba1\u8bbf\u95ee\u91cf\u5fc5\u987b\u5c0f\u4e8e\u7b49\u4e8e cap\u3002",
      "2. \u65f6\u95f4\u7a97\u5fc5\u987b\u662f\u8fde\u7eed\u7684 x \u4e2a\u5c0f\u65f6\uff0c\u5e76\u4e14 x \u5c3d\u53ef\u80fd\u5927\uff0c\u4e14\u4e0d\u8d85\u8fc7 168\u3002",
      "3. \u65f6\u95f4\u7a97\u53ef\u4ee5\u8de8\u5468\u671f\uff0c\u4f8b\u5982\u4ece\u5f53\u524d\u5468\u671f\u7684\u7b2c 167 \u5c0f\u65f6\u5230\u4e0b\u4e00\u5468\u671f\u7684\u7b2c 166 \u5c0f\u65f6\u3002",
      "\u8bf7\u8fd4\u56de\u6700\u4f73\u5347\u7ea7\u65f6\u95f4\u7a97\u7684 [\u5f00\u59cb\u4e0b\u6807, \u7ed3\u675f\u4e0b\u6807]\uff08\u90fd\u4e3a\u5305\u542b\u8fb9\u754c\uff09\u3002\u5982\u679c\u5b58\u5728\u591a\u4e2a\u6700\u4f18\u65f6\u95f4\u7a97\uff0c\u8fd4\u56de\u5f00\u59cb\u4e0b\u6807\u6700\u5c0f\u7684\u4e00\u4e2a\uff1b\u82e5\u4e0d\u5b58\u5728\uff0c\u8fd4\u56de [-1, -1]\u3002",
      "\u8f93\u5165\uff1a\n\u7b2c\u4e00\u4e2a\u53c2\u6570 cap\uff0c0 <= cap < 2^31\u3002\n\u7b2c\u4e8c\u4e2a\u53c2\u6570 visitCnt\uff0c0 <= visitCnt[i] <= 2^31\u3002",
      "\u8f93\u51fa\uff1a\n\u4e24\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6700\u957f\u65f6\u95f4\u7a97\u7684\u5f00\u59cb\u4e0b\u6807\u548c\u7ed3\u675f\u4e0b\u6807\u3002",
      "\u6837\u4f8b 1\uff1a\n\u8f93\u5165\uff1a6\n[\u91cd\u590d 7 \u5929\u7684 24 \u5c0f\u65f6\u8bbf\u95ee\u6a21\u5f0f]\n\u8f93\u51fa\uff1a[22, 25]",
      "\u6837\u4f8b 2\uff1a\n\u8f93\u5165\uff1a200\n[168 \u4e2a 1]\n\u8f93\u51fa\uff1a[0, 167]",
      "\u4f60\u53ea\u9700\u8981\u5b8c\u6210 Solution::BestUpgradeWindow\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6ce8\u5165 main \u548c\u672c\u5730\u6d4b\u8bd5\u6846\u67b6\u3002",
    ].join("\n\n"),
    sampleInput: [
      "6",
      `[${Array(7)
        .fill("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1")
        .join(", ")}]`,
    ].join("\n"),
    sampleOutput: "[22, 25]",
    starterCode: [
      "#include <utility>",
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  pair<int, int> BestUpgradeWindow(long long cap, const vector<long long>& visitCnt) {",
      "    pair<int, int> answer = {-1, -1};",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "string trim(const string& text) {",
      "  size_t left = text.find_first_not_of(\" \\t\\r\\n\");",
      "  if (left == string::npos) return \"\";",
      "  size_t right = text.find_last_not_of(\" \\t\\r\\n\");",
      "  return text.substr(left, right - left + 1);",
      "}",
      "",
      "vector<long long> parseList(const string& text) {",
      "  vector<long long> values;",
      "  int sign = 1;",
      "  long long current = 0;",
      "  bool inNumber = false;",
      "  for (char ch : text) {",
      "    if (ch == '-') {",
      "      sign = -1;",
      "      current = 0;",
      "      inNumber = true;",
      "    } else if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      values.push_back(static_cast<int>(sign * current));",
      "      sign = 1;",
      "      current = 0;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  if (inNumber) {",
      "    values.push_back(static_cast<int>(sign * current));",
      "  }",
      "  return values;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string capLine;",
      "  string visitLine;",
      "",
      "  while (capLine.empty() && getline(cin, capLine)) {}",
      "  while (visitLine.empty() && getline(cin, visitLine)) {}",
      "",
      "  long long cap = stoll(trusted_exam_runner::trim(capLine));",
      "  vector<long long> visitCnt = trusted_exam_runner::parseList(visitLine);",
      "",
      "  Solution solver;",
      "  auto answer = solver.BestUpgradeWindow(cap, visitCnt);",
      "  cout << '[' << answer.first << \", \" << answer.second << \"]\\n\";",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-005",
    title: "[\u8f6f\u4ef6\u8ba4\u8bc1] \u8868\u8fbe\u5f0f\u8ba1\u7b97",
    difficulty: "medium",
    tags: ["stack", "string", "expression"],
    url: "",
    source: "\u53ef\u4fe1\u8003\u8bd5",
    editorMode: "solution_class",
    solutionEntry: "EvaluateExpression",
    description: [
      "\u56db\u5219\u8fd0\u7b97\u8868\u8fbe\u5f0f\u53ef\u4ee5\u7528\u8868\u8fbe\u5f0f\u6811\u6765\u8868\u8fbe\u3002\u540e\u5e8f\u904d\u5386\uff08LRN\uff09\u6307\u5148\u904d\u5386\u5de6\u5b50\u6811\uff0c\u518d\u904d\u5386\u53f3\u5b50\u6811\uff0c\u6700\u540e\u8bbf\u95ee\u6839\u8282\u70b9\u3002",
      "\u73b0\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 expression\uff0c\u8868\u793a\u4e00\u4e2a\u540e\u5e8f\u904d\u5386\u5f62\u5f0f\u7684\u56db\u5219\u8fd0\u7b97\u8868\u8fbe\u5f0f\uff0c\u8bf7\u8ba1\u7b97\u51fa\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\uff08\u53ea\u8f93\u51fa\u6574\u6570\u90e8\u5206\uff09\u3002",
      "1. \u90fd\u662f\u53cc\u76ee\u8fd0\u7b97\uff0c\u4e0d\u5b58\u5728\u5355\u76ee\u8fd0\u7b97\u3002",
      "2. \u4e2d\u95f4\u8fc7\u7a0b\u7ed3\u679c\u8303\u56f4\uff1a[-2^31, 2^31)\u3002",
      "3. \u9664\u6cd5\u53ea\u9700\u4fdd\u7559\u6574\u6570\u90e8\u5206\uff0c\u4f8b\u5982 5/4=1\uff0c(-5)/3=-1\uff0c5/(-3)=-1\uff0c\u9898\u76ee\u4e0d\u4f1a\u51fa\u73b0\u9664\u6570\u4e3a 0 \u7684\u60c5\u51b5\u3002",
      "\u8f93\u5165\uff1a\n\u4e00\u4e2a\u5b57\u7b26\u4e32 expression\uff0c\u7531\u64cd\u4f5c\u6570\u548c\u8fd0\u7b97\u7b26\u7ec4\u6210\uff0c\u5404\u9879\u4e4b\u95f4\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\uff0c1 <= expression.length < 50000\u3002",
      "\u8f93\u51fa\uff1a\n\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u8868\u8fbe\u5f0f\u7684\u8ba1\u7b97\u7ed3\u679c\u3002",
      "\u6837\u4f8b 1\uff1a\n\u8f93\u5165\uff1a9,3,5,-,2,*,+\n\u8f93\u51fa\uff1a5",
      "\u6837\u4f8b 2\uff1a\n\u8f93\u5165\uff1a3,-3,-,2,/,10,-\n\u8f93\u51fa\uff1a-7",
      "\u4f60\u53ea\u9700\u8981\u5b8c\u6210 Solution::EvaluateExpression\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6ce8\u5165 main \u548c\u672c\u5730\u6d4b\u8bd5\u6846\u67b6\u3002",
    ].join("\n\n"),
    sampleInput: "9,3,5,-,2,*,+",
    sampleOutput: "5",
    starterCode: [
      "#include <string>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  int EvaluateExpression(const string& expression) {",
      "    int answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string expression;",
      "  while (expression.empty() && getline(cin, expression)) {}",
      "",
      "  Solution solver;",
      "  cout << solver.EvaluateExpression(expression) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-006",
    title: "[\u8f6f\u4ef6\u8ba4\u8bc1] \u4fe1\u53f7\u89e3\u7801",
    difficulty: "medium",
    tags: ["string", "stack", "expression"],
    url: "",
    source: "\u53ef\u4fe1\u8003\u8bd5",
    editorMode: "solution_class",
    solutionEntry: "DecodeSignal",
    description: [
      "\u65e0\u7ebf\u57fa\u5730\u63a5\u6536\u5230\u624b\u673a\u4e0a\u62a5\u7684\u67d0\u79cd\u4fe1\u606f\u540e\uff0c\u9700\u8981\u5148\u8fdb\u884c\u89e3\u7801\u64cd\u4f5c\uff0c\u518d\u8ba1\u7b97\u7ed3\u679c\u3002\u5047\u5b9a\u6bcf\u6761\u4fe1\u606f\u4e2d\u90fd\u81f3\u5c11\u5305\u542b\u7279\u6b8a\u8fd0\u7b97\u7b26 @ \u548c $ \u4e4b\u4e00\uff0c\u89e3\u7801\u89c4\u5219\u5982\u4e0b\uff1a",
      "1. x@y = 2*x + y + 3",
      "2. x$y = 3*x + 2*y + 1",
      "x\uff0cy \u90fd\u662f\u975e\u8d1f\u6574\u6570\uff1b@ \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e $\uff1b\u76f8\u540c\u7684\u7279\u6b8a\u8fd0\u7b97\u7b26\u6309\u4ece\u5de6\u5230\u53f3\u7684\u987a\u5e8f\u8ba1\u7b97\u3002",
      "\u73b0\u7ed9\u5b9a\u5b57\u7b26\u4e32 message\uff0c\u4ee3\u8868\u4e00\u6761\u624b\u673a\u4e0a\u62a5\u7684\u5f85\u89e3\u7801\u4fe1\u606f\uff0c\u8bf7\u6309\u7167\u89c4\u5219\u89e3\u7801\u5e76\u8fd4\u56de\u6700\u7ec8\u8ba1\u7b97\u7ed3\u679c\u3002",
      "\u8f93\u5165\uff1a\n\u5b57\u7b26\u4e32 message\uff0c\u4ec5\u5305\u542b\u6570\u5b57\u5b57\u7b26\u548c\u7b26\u53f7 @\u3001$\uff0c3 <= message.length <= 100\u3002\u7528\u4f8b\u4fdd\u8bc1\u6570\u5b57\u3001\u8ba1\u7b97\u8fc7\u7a0b\u4ee5\u53ca\u7ed3\u679c\u7684\u53d6\u503c\u8303\u56f4\u5747\u4e3a [0, 2^31 - 1]\uff0c\u8f93\u5165\u5408\u6cd5\u4e14\u6570\u5b57\u4e0d\u5b58\u5728\u524d\u5bfc 0\u3002",
      "\u8f93\u51fa\uff1a\n\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6700\u7ec8\u8ba1\u7b97\u7ed3\u679c\u3002",
      "\u6837\u4f8b 1\uff1a\n\u8f93\u5165\uff1a11@2$3@14\n\u8f93\u51fa\uff1a128",
      "\u4f60\u53ea\u9700\u8981\u5b8c\u6210 Solution::DecodeSignal\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6ce8\u5165 main \u548c\u672c\u5730\u6d4b\u8bd5\u6846\u67b6\u3002",
    ].join("\n\n"),
    sampleInput: "11@2$3@14",
    sampleOutput: "128",
    starterCode: [
      "#include <string>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  int DecodeSignal(const string& message) {",
      "    int answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string message;",
      "  while (message.empty() && getline(cin, message)) {}",
      "",
      "  Solution solver;",
      "  cout << solver.DecodeSignal(message) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-007",
    title: "[\u8f6f\u4ef6\u8ba4\u8bc1] \u6311\u9009\u793c\u7269",
    difficulty: "medium",
    tags: ["queue", "stack", "simulation"],
    url: "",
    source: "\u53ef\u4fe1\u8003\u8bd5",
    editorMode: "solution_class",
    solutionEntry: "CountUnpickedGifts",
    description: [
      "\u67d0\u90e8\u95e8\u8fdb\u884c\u56e2\u5efa\uff0c\u63d0\u4f9b\u4e24\u79cd\u793c\u7269\u4f9b\u5458\u5de5\u6311\u9009\uff1a\u96e8\u4f1e\u548c\u65e0\u7ebf\u9f20\u6807\uff0c\u5206\u522b\u7528\u6570\u5b57 1 \u548c 2 \u8868\u793a\u3002",
      "\u6bcf\u4e2a\u5458\u5de5\u90fd\u6709\u81ea\u5df1\u559c\u6b22\u7684\u793c\u7269\uff0c\u8bb0\u5f55\u4e8e favorites \u4e2d\uff1b\u793c\u7269\u603b\u6570\u4e0e\u5458\u5de5\u6570\u76f8\u540c\uff0c\u8bb0\u5f55\u4e8e presents \u4e2d\u3002\u6240\u6709\u793c\u7269\u653e\u5728\u4e00\u4e2a\u6808\u91cc\uff0c\u5458\u5de5\u53ea\u80fd\u4ece\u6808\u9876\u53d6\u793c\u7269\u3002",
      "\u5458\u5de5\u6392\u6210\u4e00\u4e2a\u961f\u5217\u4f9d\u6b21\u6311\u9009\u793c\u7269\uff1a\u5982\u679c\u961f\u9996\u5458\u5de5\u559c\u6b22\u7684\u793c\u7269\u6b63\u597d\u662f\u6808\u9876\u793c\u7269\uff0c\u5219\u8be5\u5458\u5de5\u62ff\u8d70\u5b83\u5e76\u79bb\u5f00\u961f\u5217\uff1b\u5426\u5219\u4ed6\u4f1a\u79fb\u5230\u961f\u5c3e\uff0c\u7b49\u5f85\u4e0b\u4e00\u6b21\u6311\u9009\u3002\u8be5\u8fc7\u7a0b\u6301\u7eed\u5230\u961f\u5217\u4e2d\u6240\u6709\u5458\u5de5\u90fd\u4e0d\u559c\u6b22\u6808\u9876\u793c\u7269\u4e3a\u6b62\u3002",
      "\u6ce8\u610f\uff1afavorites \u4e2d\u4e0b\u6807 0 \u8868\u793a\u961f\u5217\u6700\u524d\u65b9\uff0cpresents \u4e2d\u4e0b\u6807 0 \u8868\u793a\u6808\u9876\u3002\u8bf7\u8fd4\u56de\u6700\u540e\u65e0\u6cd5\u83b7\u53d6\u5230\u793c\u7269\u7684\u5458\u5de5\u6570\u91cf\u3002",
      "\u8f93\u5165\uff1a\nfavorites \u548c presents\uff0c1 <= length <= 100\uff0c\u5143\u7d20\u53ea\u53d6 1 \u6216 2\u3002",
      "\u8f93\u51fa\uff1a\n\u8fd4\u56de\u65e0\u6cd5\u83b7\u53d6\u5230\u793c\u7269\u7684\u5458\u5de5\u6570\u91cf\u3002",
      "\u6837\u4f8b 1\uff1a\n\u8f93\u5165\uff1a[1, 2, 2, 1, 2]\n[2, 1, 1, 2, 1]\n\u8f93\u51fa\uff1a1",
      "\u4f60\u53ea\u9700\u8981\u5b8c\u6210 Solution::CountUnpickedGifts\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6ce8\u5165 main \u548c\u672c\u5730\u6d4b\u8bd5\u6846\u67b6\u3002",
    ].join("\n\n"),
    sampleInput: ["[1, 2, 2, 1, 2]", "[2, 1, 1, 2, 1]"].join("\n"),
    sampleOutput: "1",
    starterCode: [
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  int CountUnpickedGifts(const vector<int>& favorites, const vector<int>& presents) {",
      "    int answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "vector<int> parseList(const string& text) {",
      "  vector<int> values;",
      "  int sign = 1;",
      "  long long current = 0;",
      "  bool inNumber = false;",
      "  for (char ch : text) {",
      "    if (ch == '-') {",
      "      sign = -1;",
      "      current = 0;",
      "      inNumber = true;",
      "    } else if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      values.push_back(static_cast<int>(sign * current));",
      "      sign = 1;",
      "      current = 0;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  if (inNumber) values.push_back(static_cast<int>(sign * current));",
      "  return values;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string favoritesLine;",
      "  string presentsLine;",
      "  while (favoritesLine.empty() && getline(cin, favoritesLine)) {}",
      "  while (presentsLine.empty() && getline(cin, presentsLine)) {}",
      "",
      "  vector<int> favorites = trusted_exam_runner::parseList(favoritesLine);",
      "  vector<int> presents = trusted_exam_runner::parseList(presentsLine);",
      "",
      "  Solution solver;",
      "  cout << solver.CountUnpickedGifts(favorites, presents) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-008",
    title: "[\u8f6f\u4ef6\u8ba4\u8bc1] \u5355\u677f\u544a\u8b66\u7edf\u8ba1",
    difficulty: "medium",
    tags: ["set", "sorting", "string"],
    url: "",
    source: "\u53ef\u4fe1\u8003\u8bd5",
    editorMode: "solution_class",
    solutionEntry: "MergeAlarmIds",
    description: [
      "\u5047\u8bbe\u67d0\u7cfb\u7edf\u4e2d\u6709\u4e24\u5757\u5355\u677f\uff0c\u8fd9\u4e24\u5757\u5355\u677f\u4e0a\u4ea7\u751f\u7684\u544a\u8b66 ID\uff08\u4ee5\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\u8868\u793a\uff09\u5206\u522b\u5b58\u50a8\u5728\u5217\u8868 arrayA \u548c arrayB \u4e2d\u3002",
      "\u8bf7\u7edf\u8ba1\u5e76\u8f93\u51fa\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u544a\u8b66 ID\uff08\u5373 arrayA \u548c arrayB \u7684\u5e76\u96c6\uff09\uff1a\u5982\u679c\u544a\u8b66 ID \u5b58\u5728\u91cd\u590d\uff0c\u5148\u53bb\u91cd\uff1b\u7136\u540e\u6309\u544a\u8b66 ID \u6240\u8868\u793a\u503c\u7684\u5347\u5e8f\u6392\u5e8f\u8f93\u51fa\u3002",
      "\u8f93\u5165\uff1a\narrayA \u548c arrayB\uff0c0 <= length <= 1000\u3002\u544a\u8b66 ID \u4e3a\u65e0\u7b26\u53f7\u6574\u6570\u7684 16 \u8fdb\u5236\u5b57\u7b26\u4e32\uff0c\u7531\u6570\u5b57\u5b57\u7b26\u548c\u5927\u5199\u5b57\u6bcd A-F \u7ec4\u6210\uff0c\u56fa\u5b9a\u4e3a 8 \u4e2a\u5b57\u7b26\u3002",
      "\u8f93\u51fa\uff1a\n\u6309\u5347\u5e8f\u6392\u5e8f\u7684\u544a\u8b66 ID \u5217\u8868\u3002",
      "\u6837\u4f8b 1\uff1a\n\u8f93\u5165\uff1a[\"00001001\", \"00ABCD00\"]\n[\"FFFFFAAB\", \"FFFFFAAB\", \"00ABCD00\"]\n\u8f93\u51fa\uff1a[\"00001001\", \"00ABCD00\", \"FFFFFAAB\"]",
      "\u4f60\u53ea\u9700\u8981\u5b8c\u6210 Solution::MergeAlarmIds\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6ce8\u5165 main \u548c\u672c\u5730\u6d4b\u8bd5\u6846\u67b6\u3002",
    ].join("\n\n"),
    sampleInput: ["[\"00001001\", \"00ABCD00\"]", "[\"FFFFFAAB\", \"FFFFFAAB\", \"00ABCD00\"]"].join("\n"),
    sampleOutput: "[\"00001001\", \"00ABCD00\", \"FFFFFAAB\"]",
    starterCode: [
      "#include <string>",
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  vector<string> MergeAlarmIds(const vector<string>& arrayA, const vector<string>& arrayB) {",
      "    vector<string> answer;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "vector<string> parseStringList(const string& text) {",
      "  vector<string> values;",
      "  string current;",
      "  bool inString = false;",
      "  for (char ch : text) {",
      "    if (ch == '\"') {",
      "      if (inString) {",
      "        values.push_back(current);",
      "        current.clear();",
      "      }",
      "      inString = !inString;",
      "      continue;",
      "    }",
      "    if (inString) current.push_back(ch);",
      "  }",
      "  return values;",
      "}",
      "string stringify(const vector<string>& values) {",
      "  string out = \"[\";",
      "  for (size_t i = 0; i < values.size(); ++i) {",
      "    if (i) out += \", \";",
      "    out += '\"' + values[i] + '\"';",
      "  }",
      "  out += \"]\";",
      "  return out;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string lineA;",
      "  string lineB;",
      "  while (lineA.empty() && getline(cin, lineA)) {}",
      "  while (lineB.empty() && getline(cin, lineB)) {}",
      "",
      "  vector<string> arrayA = trusted_exam_runner::parseStringList(lineA);",
      "  vector<string> arrayB = trusted_exam_runner::parseStringList(lineB);",
      "",
      "  Solution solver;",
      "  cout << trusted_exam_runner::stringify(solver.MergeAlarmIds(arrayA, arrayB)) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-009",
    title: "[\u8f6f\u4ef6\u8ba4\u8bc1] \u8bdd\u5355\u53d1\u9001",
    difficulty: "medium",
    tags: ["greedy", "sorting", "array"],
    url: "",
    source: "\u53ef\u4fe1\u8003\u8bd5",
    editorMode: "solution_class",
    solutionEntry: "MaxBillsToSend",
    description: [
      "\u67d0\u6838\u5fc3\u7f51\u8bbe\u5907\u5411\u8ba1\u8d39\u7f51\u5173\u53d1\u9001\u8bdd\u5355\u3002\u6bcf\u4e2a\u8bdd\u5355\u5177\u6709\u957f\u5ea6\u548c\u4f18\u5148\u7ea7\u4e24\u4e2a\u5c5e\u6027\uff0c\u5206\u522b\u8bb0\u5f55\u4e8e bills \u548c priorities \u4e2d\u3002bills[i] \u8868\u793a\u7b2c i \u4e2a\u5f85\u53d1\u9001\u8bdd\u5355\u7684\u957f\u5ea6\uff0cpriorities[i] \u8868\u793a\u7b2c i \u4e2a\u8bdd\u5355\u7684\u4f18\u5148\u7ea7\u3002",
      "\u53d1\u9001\u89c4\u5219\uff1a\u4f18\u5148\u7ea7\u503c\u8d8a\u5c0f\uff0c\u8868\u793a\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff1b\u9ad8\u4f18\u5148\u7ea7\u7684\u8bdd\u5355\u53d1\u9001\u5b8c\u540e\uff0c\u624d\u80fd\u53d1\u9001\u6b21\u4f18\u5148\u7ea7\u3002\u8bbe\u5907\u6709\u4e00\u4e2a\u627f\u8f7d\u89c4\u683c cap\uff0c\u53d1\u9001\u8bdd\u5355\u7684\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 cap\u3002",
      "\u73b0\u7ed9\u5b9a cap\uff0c\u8bf7\u8ba1\u7b97\u6700\u591a\u53ef\u4ee5\u53d1\u9001\u591a\u5c11\u4e2a\u8bdd\u5355\u3002",
      "\u8f93\u5165\uff1a\ncap\uff0c1 <= cap <= 10000\uff1bbills\uff0c0 <= bills[i] <= 1000\uff0c0 <= bills.length <= 100\uff1bpriorities\uff0c0 <= priorities[i] <= 30\uff0cbills.length == priorities.length\u3002",
      "\u8f93\u51fa\uff1a\n\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6700\u591a\u80fd\u53d1\u9001\u7684\u8bdd\u5355\u4e2a\u6570\u3002",
      "\u6837\u4f8b 1\uff1a\n\u8f93\u5165\uff1a110\n[50, 20, 30, 10, 50]\n[2, 2, 1, 3, 1]\n\u8f93\u51fa\uff1a3",
      "\u4f60\u53ea\u9700\u8981\u5b8c\u6210 Solution::MaxBillsToSend\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6ce8\u5165 main \u548c\u672c\u5730\u6d4b\u8bd5\u6846\u67b6\u3002",
    ].join("\n\n"),
    sampleInput: ["110", "[50, 20, 30, 10, 50]", "[2, 2, 1, 3, 1]"].join("\n"),
    sampleOutput: "3",
    starterCode: [
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  int MaxBillsToSend(int cap, const vector<int>& bills, const vector<int>& priorities) {",
      "    int answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "vector<int> parseList(const string& text) {",
      "  vector<int> values;",
      "  int sign = 1;",
      "  long long current = 0;",
      "  bool inNumber = false;",
      "  for (char ch : text) {",
      "    if (ch == '-') {",
      "      sign = -1;",
      "      current = 0;",
      "      inNumber = true;",
      "    } else if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      values.push_back(static_cast<int>(sign * current));",
      "      sign = 1;",
      "      current = 0;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  if (inNumber) values.push_back(static_cast<int>(sign * current));",
      "  return values;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string capLine;",
      "  string billsLine;",
      "  string prioritiesLine;",
      "  while (capLine.empty() && getline(cin, capLine)) {}",
      "  while (billsLine.empty() && getline(cin, billsLine)) {}",
      "  while (prioritiesLine.empty() && getline(cin, prioritiesLine)) {}",
      "",
      "  int cap = stoi(capLine);",
      "  vector<int> bills = trusted_exam_runner::parseList(billsLine);",
      "  vector<int> priorities = trusted_exam_runner::parseList(prioritiesLine);",
      "",
      "  Solution solver;",
      "  cout << solver.MaxBillsToSend(cap, bills, priorities) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-010",
    title: "[软件认证] 呼叫转移",
    difficulty: "medium",
    tags: ["string", "simulation", "hash table"],
    url: "",
    source: "可信考试",
    editorMode: "solution_class",
    solutionEntry: "ResolveCallForwarding",
    description: [
      "呼叫转移（Call Forwarding）用于在用户无法接听电话时，将呼叫转移至其他号码。",
      "给定用户当前状态 `status` 和若干条呼叫转移登记记录 `registers`，每条记录包含 `type` 和 `phoneNumber`。",
      "规则如下：",
      "1. `type = 0`：无条件转移，任何状态下都转移。",
      "2. `type = 1`：遇忙转移，仅 `busy` 时生效。",
      "3. `type = 2`：无应答转移，仅 `no-response` 时生效。",
      "4. `type = 3`：无法接通转移，仅 `unreachable` 时生效。",
      "5. `type = 4`：有条件转移，优先级低于 `type 1/2/3`，在 `busy`、`no-response`、`unreachable` 时可兜底生效。",
      "同一 `type` 若重复登记，以最后一次登记为准。",
      "输出规则：",
      "1. 如果命中转移，输出转移号码。",
      "2. 如果 `status = idle` 且未发生转移，输出 `success`。",
      "3. 其他情况输出 `failure`。",
      "样例 1：",
      "输入：busy",
      '[[2, "18912345678"], [4, "13123456781"], [1, "13312345677"]]',
      "输出：13312345677",
      "你只需要完成 `Solution::ResolveCallForwarding`，系统会自动注入 `main` 和本地测试框架。",
    ].join("\n\n"),
    sampleInput: ['busy', '[[2, "18912345678"], [4, "13123456781"], [1, "13312345677"]]'].join(
      "\n"
    ),
    sampleOutput: "13312345677",
    starterCode: [
      "#include <string>",
      "#include <utility>",
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  string ResolveCallForwarding(",
      "      const string& status,",
      "      const vector<pair<int, string>>& registers) {",
      '    string answer = "failure";',
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "string trim(const string& text) {",
      "  size_t left = text.find_first_not_of(\" \\t\\r\\n\");",
      "  if (left == string::npos) return \"\";",
      "  size_t right = text.find_last_not_of(\" \\t\\r\\n\");",
      "  return text.substr(left, right - left + 1);",
      "}",
      "",
      "vector<pair<int, string>> parseRegisters(const string& text) {",
      "  vector<pair<int, string>> values;",
      "  vector<int> types;",
      "  vector<string> phones;",
      "  long long current = 0;",
      "  bool inNumber = false;",
      "  bool inString = false;",
      "  string token;",
      "  for (char ch : text) {",
      "    if (inString) {",
      "      if (ch == '\"') {",
      "        phones.push_back(token);",
      "        token.clear();",
      "        inString = false;",
      "      } else {",
      "        token.push_back(ch);",
      "      }",
      "      continue;",
      "    }",
      "    if (ch == '\"') {",
      "      inString = true;",
      "      token.clear();",
      "      continue;",
      "    }",
      "    if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      types.push_back(static_cast<int>(current));",
      "      current = 0;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  if (inNumber) {",
      "    types.push_back(static_cast<int>(current));",
      "  }",
      "  for (size_t i = 0; i < types.size() && i < phones.size(); ++i) {",
      "    values.push_back({types[i], phones[i]});",
      "  }",
      "  return values;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string statusLine;",
      "  string registersLine;",
      "  while (statusLine.empty() && getline(cin, statusLine)) {}",
      "  while (registersLine.empty() && getline(cin, registersLine)) {}",
      "",
      "  string status = trusted_exam_runner::trim(statusLine);",
      "  auto registers = trusted_exam_runner::parseRegisters(registersLine);",
      "",
      "  Solution solver;",
      "  cout << solver.ResolveCallForwarding(status, registers) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-011",
    title: "[软件认证] 遥控小车",
    difficulty: "easy",
    tags: ["simulation", "array", "geometry"],
    url: "",
    source: "可信考试",
    editorMode: "solution_class",
    solutionEntry: "MoveCar",
    description: [
      "假设平面直角坐标系中，向上为 Y 轴正方向，向左为 X 轴负方向，向右为 X 轴正方向。",
      "一辆遥控小车初始位于原点 `(0, 0)`，且面朝北方。",
      "小车接收如下指令：",
      "1. `G`：直走 1 个单位",
      "2. `L`：左转 90 度",
      "3. `R`：右转 90 度",
      "给定一组指令 `cmds`，请计算小车执行完所有指令后的最终坐标。",
      "输入：由字符 `G`、`L`、`R` 组成的字符串，`1 <= cmds.length <= 100`。",
      "输出：`[x, y]`。",
      "样例 1：",
      "输入：GG",
      "输出：[0, 2]",
      "你只需要完成 `Solution::MoveCar`，系统会自动注入 `main` 和本地测试框架。",
    ].join("\n\n"),
    sampleInput: "GG",
    sampleOutput: "[0, 2]",
    starterCode: [
      "#include <utility>",
      "#include <string>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  pair<int, int> MoveCar(const string& cmds) {",
      "    pair<int, int> answer = {0, 0};",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string cmds;",
      "  while (cmds.empty() && getline(cin, cmds)) {}",
      "",
      "  Solution solver;",
      "  auto answer = solver.MoveCar(cmds);",
      "  cout << '[' << answer.first << \", \" << answer.second << \"]\\n\";",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-012",
    title: "[软件认证] 单词统计",
    difficulty: "medium",
    tags: ["string", "simulation", "parsing"],
    url: "",
    source: "可信考试",
    editorMode: "solution_class",
    solutionEntry: "CountWords",
    description: [
      "一段英文内容记录于 `lines` 中，每行仅包含小写英文字母、空格、逗号、句号，以及续行符 `-`。",
      "请统计其中的单词数量。",
      "统计规则：",
      "1. 单词是由连续小写字母组成的最大子串。",
      "2. 空格、逗号、句号都视为分隔符。",
      "3. 若某一行以 `-` 结尾，则该 `-` 为续行符，不计入内容；下一行会直接拼接到这一行末尾，中间不插入分隔符。",
      "4. 若某一行不以 `-` 结尾，则与下一行之间视为存在一个分隔符。",
      "输入：字符串数组 `lines`，`1 <= lines.length <= 25`，`1 <= lines[i].length <= 80`。",
      "输出：一个整数，表示单词数量。",
      "样例 1：",
      '输入：["engineers, worldwide, courses part-", "y vendors", "hello to."]',
      "输出：7",
      "解释：拼接后得到 `engineers, worldwide, courses party vendors hello to.`，共有 7 个单词。",
      "你只需要完成 `Solution::CountWords`，系统会自动注入 `main` 和本地测试框架。",
    ].join("\n\n"),
    sampleInput: '["engineers, worldwide, courses part-", "y vendors", "hello to."]',
    sampleOutput: "7",
    starterCode: [
      "#include <string>",
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  int CountWords(const vector<string>& lines) {",
      "    int answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "vector<string> parseStringList(const string& text) {",
      "  vector<string> values;",
      "  string current;",
      "  bool inString = false;",
      "  for (char ch : text) {",
      "    if (ch == '\"') {",
      "      if (inString) {",
      "        values.push_back(current);",
      "        current.clear();",
      "      }",
      "      inString = !inString;",
      "      continue;",
      "    }",
      "    if (inString) current.push_back(ch);",
      "  }",
      "  return values;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string linesInput;",
      "  while (linesInput.empty() && getline(cin, linesInput)) {}",
      "",
      "  auto lines = trusted_exam_runner::parseStringList(linesInput);",
      "  Solution solver;",
      "  cout << solver.CountWords(lines) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-013",
    title: "[软件认证] 矩阵列的最大值中的最小值",
    difficulty: "easy",
    tags: ["matrix", "array", "simulation"],
    url: "",
    source: "可信考试",
    editorMode: "solution_class",
    solutionEntry: "MinAmongColumnMax",
    description: [
      "现给定一个 `n * m` 矩阵 `matrix`，请先找出每一列元素的最大值，共计 `m` 个；然后输出这 `m` 个值中的最小值。",
      "解答要求：",
      "时间限制：C/C++ 1000ms，其他语言 2000ms",
      "内存限制：C/C++ 256MB，其他语言 512MB",
      "输入：",
      "矩阵 `matrix`，`1 <= matrix.length <= 100`，`1 <= matrix[i].length <= 100`，`-10000 <= matrix[i][j] <= 10000`。",
      "输出：",
      "一个整数，表示所求的值。",
      "样例 1：",
      "输入：[[1, 2], [3, 4], [2, 4]]",
      "输出：3",
      "解释：第 1 列最大值为 3，第 2 列最大值为 4，这两个值中的最小值为 3。",
      "你只需要完成 `Solution::MinAmongColumnMax`，系统会自动注入 `main` 和本地测试框架。",
    ].join("\n\n"),
    sampleInput: "[[1, 2], [3, 4], [2, 4]]",
    sampleOutput: "3",
    starterCode: [
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  int MinAmongColumnMax(const vector<vector<int>>& matrix) {",
      "    int answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "vector<vector<int>> parseMatrix(const string& text) {",
      "  vector<vector<int>> matrix;",
      "  vector<int> currentRow;",
      "  int sign = 1;",
      "  long long current = 0;",
      "  bool inNumber = false;",
      "  int depth = 0;",
      "  for (char ch : text) {",
      "    if (ch == '[') {",
      "      depth += 1;",
      "      if (depth == 2) currentRow.clear();",
      "      continue;",
      "    }",
      "    if (ch == ']') {",
      "      if (inNumber) {",
      "        currentRow.push_back(static_cast<int>(sign * current));",
      "        sign = 1;",
      "        current = 0;",
      "        inNumber = false;",
      "      }",
      "      if (depth == 2) matrix.push_back(currentRow);",
      "      depth -= 1;",
      "      continue;",
      "    }",
      "    if (ch == '-') {",
      "      sign = -1;",
      "      current = 0;",
      "      inNumber = true;",
      "    } else if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      currentRow.push_back(static_cast<int>(sign * current));",
      "      sign = 1;",
      "      current = 0;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  return matrix;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string matrixLine;",
      "  while (matrixLine.empty() && getline(cin, matrixLine)) {}",
      "",
      "  auto matrix = trusted_exam_runner::parseMatrix(matrixLine);",
      "  Solution solver;",
      "  cout << solver.MinAmongColumnMax(matrix) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-014",
    title: "[软件认证] 公共字符",
    difficulty: "medium",
    tags: ["string", "hash table", "counting"],
    url: "",
    source: "可信考试",
    editorMode: "solution_class",
    solutionEntry: "FindCommonCharacters",
    description: [
      "给定一组字符串 `strings`，请计算有哪些字符在所有字符串中都出现过 `count` 次及以上。",
      "输入",
      "第一个参数是 `count`，`1 <= count <= 100`。",
      "第二个参数是 `strings`，`1 <= strings.length <= 100`，`1 <= strings[i].length < 1000`，`strings[i]` 仅由英文字母和数字组成。",
      "输出",
      "按 ASCII 码升序输出所有符合要求的字符；如果没有符合要求的字符，则输出空列表 `[]`。",
      "样例 1",
      "输入：\n2\n[\"aabbccFFFFx2x2\", \"aaccddFFFFx2x2\", \"aabcdFFFFx2x2\"]",
      "输出：\n[\"2\", \"F\", \"a\", \"x\"]",
      "你只需要完成 `Solution::FindCommonCharacters`，系统会自动注入 `main` 和本地测试框架。",
    ].join("\n\n"),
    sampleInput: ['2', '["aabbccFFFFx2x2", "aaccddFFFFx2x2", "aabcdFFFFx2x2"]'].join("\n"),
    sampleOutput: '["2", "F", "a", "x"]',
    starterCode: [
      "#include <string>",
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  vector<string> FindCommonCharacters(int count, const vector<string>& strings) {",
      "    vector<string> answer;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "vector<string> parseStringList(const string& text) {",
      "  vector<string> items;",
      "  string current;",
      "  bool inString = false;",
      "  for (char ch : text) {",
      "    if (ch == '\"') {",
      "      if (inString) items.push_back(current);",
      "      current.clear();",
      "      inString = !inString;",
      "      continue;",
      "    }",
      "    if (inString) current.push_back(ch);",
      "  }",
      "  return items;",
      "}",
      "",
      "string formatStringList(const vector<string>& values) {",
      "  string out = \"[\";",
      "  for (size_t i = 0; i < values.size(); ++i) {",
      "    if (i) out += \", \";",
      "    out += '\"' + values[i] + '\"';",
      "  }",
      "  out += \"]\";",
      "  return out;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string countLine;",
      "  while (countLine.empty() && getline(cin, countLine)) {}",
      "  string stringsLine;",
      "  while (stringsLine.empty() && getline(cin, stringsLine)) {}",
      "",
      "  int count = stoi(countLine);",
      "  auto strings = trusted_exam_runner::parseStringList(stringsLine);",
      "  Solution solver;",
      "  auto answer = solver.FindCommonCharacters(count, strings);",
      "  cout << trusted_exam_runner::formatStringList(answer) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-015",
    title: "[软件认证] 给定差值的组合",
    difficulty: "easy",
    tags: ["array", "hash table", "counting"],
    url: "",
    source: "可信考试",
    editorMode: "solution_class",
    solutionEntry: "CountPairsWithDiff",
    description: [
      "给定一个数组，每个元素的值是唯一的，找出其中两个元素相减等于给定差值 `diff` 的所有不同组合的个数。",
      "组合是无序的：如 `(1, 4)` 和 `(4, 1)` 表示的是同一个组合。",
      "输入",
      "第一个参数为 `diff`，`-50000 <= diff <= 50000`。",
      "第二个参数为数组 `numbers`，`2 <= numbers.length <= 102400`，`-20 <= numbers[i] <= 102400`。",
      "输出",
      "一个整数，表示满足要求的不同组合的个数。",
      "样例 1",
      "输入：\n3\n[1, 3, 2, 5, 4]",
      "输出：\n2",
      "解释：差值 `diff` 为 3，其中 `4 - 1 = 3`，`5 - 2 = 3`，共 2 个组合。",
      "样例 2",
      "输入：\n-1\n[1, 2, 3]",
      "输出：\n2",
      "解释：其中 `1 - 2 = -1`，`2 - 3 = -1`，共 2 个组合。",
      "你只需要完成 `Solution::CountPairsWithDiff`，系统会自动注入 `main` 和本地测试框架。",
    ].join("\n\n"),
    sampleInput: ["3", "[1, 3, 2, 5, 4]"].join("\n"),
    sampleOutput: "2",
    starterCode: [
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  int CountPairsWithDiff(int diff, const vector<int>& numbers) {",
      "    int answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "vector<int> parseIntList(const string& text) {",
      "  vector<int> values;",
      "  long long current = 0;",
      "  int sign = 1;",
      "  bool inNumber = false;",
      "  for (char ch : text) {",
      "    if (ch == '-') {",
      "      sign = -1;",
      "      current = 0;",
      "      inNumber = true;",
      "    } else if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      values.push_back(static_cast<int>(sign * current));",
      "      current = 0;",
      "      sign = 1;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  if (inNumber) values.push_back(static_cast<int>(sign * current));",
      "  return values;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string diffLine;",
      "  while (diffLine.empty() && getline(cin, diffLine)) {}",
      "  string numbersLine;",
      "  while (numbersLine.empty() && getline(cin, numbersLine)) {}",
      "",
      "  int diff = stoi(diffLine);",
      "  auto numbers = trusted_exam_runner::parseIntList(numbersLine);",
      "  Solution solver;",
      "  cout << solver.CountPairsWithDiff(diff, numbers) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-016",
    title: "[软件认证] 三子连线",
    difficulty: "easy",
    tags: ["geometry", "simulation", "brute force"],
    url: "",
    source: "可信考试",
    editorMode: "solution_class",
    solutionEntry: "GetPoint",
    description: [
      "在棋盘上，每个点可以用坐标 `[x, y]` 表示，棋盘左下角坐标为 `[0, 0]`，右上角坐标为 `[18, 18]`。",
      "现给定棋盘上的两个点 `p1` 和 `p2`，请在棋盘范围内找出第三个点，使得三个点可以构成连续相邻的三子连线。",
      "仅限以下 4 种位置关系：",
      "1. 横向连续",
      "2. 纵向连续",
      "3. 45 度斜向连续",
      "4. 135 度斜向连续",
      "补充说明：",
      "1. 相邻表示三个点在同一直线上且是连续格点，中间不能隔点。",
      "2. 如果存在多个符合条件的点，返回坐标最小的点 `[x, y]`；坐标最小是指先比较 `x`，若 `x` 相同再比较 `y`。",
      "3. 如果找不到，输出 `[-1, -1]`。",
      "输入",
      "第一个参数表示点 `p1`。",
      "第二个参数表示点 `p2`。",
      "每个点的取值范围均为 `[0, 18]`。",
      "输出",
      "如果找到符合要求的点，则输出 `[x, y]`，否则输出 `[-1, -1]`。",
      "样例 1",
      "输入：\n[1, 0]\n[2, 0]",
      "输出：\n[0, 0]",
      "解释：`[0,0]`、`[1,0]`、`[2,0]` 构成水平连续三点；`[1,0]`、`[2,0]`、`[3,0]` 也满足，但按坐标最小规则应返回 `[0,0]`。",
      "样例 2",
      "输入：\n[0, 0]\n[3, 3]",
      "输出：\n[-1, -1]",
      "解释：虽然 `[1,1]`、`[2,2]` 和这两个点共线，但无法与给定两点构成连续相邻的三个格点。",
      "你只需要完成 `Solution::GetPoint`，系统会自动注入 `main` 和本地测试框架。",
    ].join("\n\n"),
    sampleInput: ["[1, 0]", "[2, 0]"].join("\n"),
    sampleOutput: "[0, 0]",
    starterCode: [
      "#include <utility>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  pair<int, int> GetPoint(const pair<int, int>& p1, const pair<int, int>& p2) {",
      "    return {-1, -1};",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "pair<int, int> parsePoint(const string& text) {",
      "  vector<int> values;",
      "  int sign = 1;",
      "  long long current = 0;",
      "  bool inNumber = false;",
      "  for (char ch : text) {",
      "    if (ch == '-') {",
      "      sign = -1;",
      "      current = 0;",
      "      inNumber = true;",
      "    } else if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      values.push_back(static_cast<int>(sign * current));",
      "      sign = 1;",
      "      current = 0;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  if (inNumber) values.push_back(static_cast<int>(sign * current));",
      "  if (values.size() < 2) return {-1, -1};",
      "  return {values[0], values[1]};",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string p1Line;",
      "  while (p1Line.empty() && getline(cin, p1Line)) {}",
      "  string p2Line;",
      "  while (p2Line.empty() && getline(cin, p2Line)) {}",
      "",
      "  auto p1 = trusted_exam_runner::parsePoint(p1Line);",
      "  auto p2 = trusted_exam_runner::parsePoint(p2Line);",
      "  Solution solver;",
      "  auto answer = solver.GetPoint(p1, p2);",
      "  cout << '[' << answer.first << \", \" << answer.second << \"]\\n\";",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-017",
    title: "[考试真题2] 命令的最短唯一前缀",
    difficulty: "easy",
    tags: ["string", "prefix", "simulation", "brute force"],
    url: "",
    source: "考试真题2",
    editorMode: "solution_class",
    solutionEntry: "GetShortestUniquePrefix",
    description: [
      "给定一个字符串数组 `cmds`，表示若干条命令；再给定一个目标命令 `cmd`，保证 `cmd` 一定出现在 `cmds` 中。",
      "请找出 `cmd` 的最短前缀，使得在数组 `cmds` 中，只有 `cmd` 自己以该前缀开头。",
      "如果目标命令的前若干个字符仍不能唯一标识它，就继续增加前缀长度；直到这个前缀能够唯一确定 `cmd` 为止。",
      "如果直到整个 `cmd` 都仍然不能和其他命令区分，则返回整个 `cmd`。",
      "输入说明",
      "第一个参数 `cmds`：字符串数组，表示所有命令。",
      "第二个参数 `cmd`：目标命令字符串，保证它在 `cmds` 中存在。",
      "输出说明",
      "返回一个字符串，表示 `cmd` 的最短唯一前缀。",
      "样例 1",
      "输入：\n[\"abc\", \"abd\", \"acc\", \"add\"]\n\"abc\"",
      "输出：\nabc",
      "解释：前缀 `a` 不唯一，前缀 `ab` 也不唯一，直到 `abc` 才能唯一标识目标命令。",
      "样例 2",
      "输入：\n[\"ab\", \"abc\", \"abcd\", \"abdc\", \"acbdc\"]\n\"acbdc\"",
      "输出：\nac",
      "解释：前缀 `a` 不唯一，但前缀 `ac` 已经可以唯一标识 `acbdc`。",
      "数据范围",
      "`1 <= cmds.size() <= 1000`，`1 <= cmds[i].size() <= 1000`。",
      "你只需要完成 `Solution::GetShortestUniquePrefix`，系统会自动注入 `main` 和本地测试框架。",
    ].join("\n\n"),
    sampleInput: ['["abc", "abd", "acc", "add"]', '"abc"'].join("\n"),
    sampleOutput: "abc",
    starterCode: [
      "#include <string>",
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  string GetShortestUniquePrefix(const vector<string>& cmds, const string& cmd) {",
      "    return cmd;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "vector<string> parseStringList(const string& text) {",
      "  vector<string> items;",
      "  string current;",
      "  bool inString = false;",
      "  for (char ch : text) {",
      "    if (ch == '\"') {",
      "      if (inString) items.push_back(current);",
      "      current.clear();",
      "      inString = !inString;",
      "      continue;",
      "    }",
      "    if (inString) current.push_back(ch);",
      "  }",
      "  return items;",
      "}",
      "",
      "string parseOneString(string text) {",
      "  size_t left = text.find_first_not_of(\" \\t\\r\\n\");",
      "  if (left == string::npos) return \"\";",
      "  size_t right = text.find_last_not_of(\" \\t\\r\\n\");",
      "  text = text.substr(left, right - left + 1);",
      "  if (text.size() >= 2 && text.front() == '\"' && text.back() == '\"') {",
      "    return text.substr(1, text.size() - 2);",
      "  }",
      "  return text;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string cmdsLine;",
      "  while (cmdsLine.empty() && getline(cin, cmdsLine)) {}",
      "  string cmdLine;",
      "  while (cmdLine.empty() && getline(cin, cmdLine)) {}",
      "",
      "  auto cmds = trusted_exam_runner::parseStringList(cmdsLine);",
      "  string cmd = trusted_exam_runner::parseOneString(cmdLine);",
      "  Solution solver;",
      "  cout << solver.GetShortestUniquePrefix(cmds, cmd) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
  {
    id: "KX-018",
    title: "[考试真题] 所有连续子数组的中位数之和",
    difficulty: "medium",
    tags: ["array", "sorting", "median", "simulation"],
    url: "",
    source: "考试真题",
    editorMode: "solution_class",
    solutionEntry: "SumOfMedians",
    description: [
      "给定一个整数数组 `nums`，请你计算 `nums` 的所有连续子数组的中位数之和。",
      "一个连续子数组指的是原数组中一段下标连续的元素。",
      "对于每个连续子数组，需要先将其元素排序，再取其中位数：",
      "1. 如果子数组长度为奇数，中位数为排序后的正中间元素。",
      "2. 如果子数组长度为偶数，中位数为排序后中间两个元素中较小的那个。",
      "请返回所有连续子数组中位数的总和。",
      "输入说明",
      "输入为一个整数数组 `nums`。",
      "输出说明",
      "返回一个 `long long`，表示所有连续子数组中位数的总和。",
      "示例 1",
      "输入：\n[1, 2, 3]",
      "输出：\n11",
      "解释：子数组 `[1]`、`[2]`、`[3]`、`[1,2]`、`[2,3]`、`[1,2,3]` 的中位数分别为 `1, 2, 3, 1, 2, 2`，总和为 `11`。",
      "示例 2",
      "输入：\n[1, 2, 3, 4, 5]",
      "输出：\n42",
      "示例 3",
      "输入：\n[1, 3, 7, 4]",
      "输出：\n33",
      "解释：所有连续子数组的中位数总和为 `33`。",
      "数据范围",
      "`1 <= nums.size() <= 1000`，`-10^9 <= nums[i] <= 10^9`。",
      "补充说明",
      "若当前子数组长度为 `len`，排序后中位数位置为 `(len - 1) / 2`，因此偶数长度时取较小的那个中位数。",
      "你只需要完成 `Solution::SumOfMedians`，系统会自动注入 `main` 和本地测试框架。",
    ].join("\n\n"),
    sampleInput: "[1, 2, 3]",
    sampleOutput: "11",
    starterCode: [
      "#include <algorithm>",
      "#include <vector>",
      "",
      "using namespace std;",
      "",
      "class Solution {",
      "public:",
      "  long long SumOfMedians(const vector<int>& nums) {",
      "    long long answer = 0;",
      "    // TODO: implement your solution.",
      "    return answer;",
      "  }",
      "};",
    ].join("\n"),
    runnerTemplate: [
      "#include <bits/stdc++.h>",
      "",
      "using namespace std;",
      "",
      "__USER_CODE__",
      "",
      "namespace trusted_exam_runner {",
      "vector<int> parseIntList(const string& text) {",
      "  vector<int> values;",
      "  long long current = 0;",
      "  int sign = 1;",
      "  bool inNumber = false;",
      "  for (char ch : text) {",
      "    if (ch == '-') {",
      "      sign = -1;",
      "      current = 0;",
      "      inNumber = true;",
      "    } else if (isdigit(static_cast<unsigned char>(ch))) {",
      "      current = current * 10 + (ch - '0');",
      "      inNumber = true;",
      "    } else if (inNumber) {",
      "      values.push_back(static_cast<int>(sign * current));",
      "      current = 0;",
      "      sign = 1;",
      "      inNumber = false;",
      "    }",
      "  }",
      "  if (inNumber) values.push_back(static_cast<int>(sign * current));",
      "  return values;",
      "}",
      "}  // namespace trusted_exam_runner",
      "",
      "int main() {",
      "  ios::sync_with_stdio(false);",
      "  cin.tie(nullptr);",
      "",
      "  string numsLine;",
      "  while (numsLine.empty() && getline(cin, numsLine)) {}",
      "",
      "  auto nums = trusted_exam_runner::parseIntList(numsLine);",
      "  Solution solver;",
      "  cout << solver.SumOfMedians(nums) << '\\n';",
      "  return 0;",
      "}",
    ].join("\n"),
  },
];

const dom = {
  statusBar: document.getElementById("statusBar"),
  addProblemForm: document.getElementById("addProblemForm"),
  recordAttemptForm: document.getElementById("recordAttemptForm"),
  planForm: document.getElementById("planForm"),
  addColumnForm: document.getElementById("addColumnForm"),
  attemptProblemSelect: document.getElementById("attemptProblemSelect"),
  compilerProblemSelect: document.getElementById("compilerProblemSelect"),
  compilerWorkspace: document.getElementById("compilerWorkspace"),
  compilerProblemPanel: document.getElementById("compilerProblemPanel"),
  compilerEditorPanel: document.getElementById("compilerEditorPanel"),
  compilerSplitter: document.getElementById("compilerSplitter"),
  compilerProblemMeta: document.getElementById("compilerProblemMeta"),
  problemStatement: document.getElementById("problemStatement"),
  sampleInputBlock: document.getElementById("sampleInputBlock"),
  sampleOutputBlock: document.getElementById("sampleOutputBlock"),
  compilerLanguageLabel: document.getElementById("compilerLanguageLabel"),
  sourceCodeEditor: document.getElementById("sourceCodeEditor"),
  stdinEditor: document.getElementById("stdinEditor"),
  sourceCodeLabel: document.getElementById("sourceCodeLabel"),
  stdinLabel: document.getElementById("stdinLabel"),
  fillSampleInputButton: document.getElementById("fillSampleInputButton"),
  resetCodeButton: document.getElementById("resetCodeButton"),
  downloadFrameButton: document.getElementById("downloadFrameButton"),
  runCodeButton: document.getElementById("runCodeButton"),
  sourceCodeInput: document.getElementById("sourceCodeInput"),
  stdinInput: document.getElementById("stdinInput"),
  runStatusChip: document.getElementById("runStatusChip"),
  outputBlock: document.getElementById("outputBlock"),
  problemTableBody: document.getElementById("problemTableBody"),
  attemptList: document.getElementById("attemptList"),
  todayPlanList: document.getElementById("todayPlanList"),
  statsCards: document.getElementById("statsCards"),
  weakTagsList: document.getElementById("weakTagsList"),
  bankBoard: document.getElementById("bankBoard"),
  filterColumnInput: document.getElementById("filterColumnInput"),
  filterDifficultyInput: document.getElementById("filterDifficultyInput"),
  filterTagInput: document.getElementById("filterTagInput"),
  searchInput: document.getElementById("searchInput"),
  importFileInput: document.getElementById("importFileInput"),
  importUpdateCheck: document.getElementById("importUpdateCheck"),
  importButton: document.getElementById("importButton"),
  photoImportInput: document.getElementById("photoImportInput"),
  photoFolderInput: document.getElementById("photoFolderInput"),
  photoInboxSummary: document.getElementById("photoInboxSummary"),
  photoInboxGrid: document.getElementById("photoInboxGrid"),
  photoDetailPanel: document.getElementById("photoDetailPanel"),
  photoDetailEmpty: document.getElementById("photoDetailEmpty"),
  photoDetailContent: document.getElementById("photoDetailContent"),
  photoPreviewImage: document.getElementById("photoPreviewImage"),
  photoDetailMeta: document.getElementById("photoDetailMeta"),
  photoMarkIncomingButton: document.getElementById("photoMarkIncomingButton"),
  photoMarkProcessedButton: document.getElementById("photoMarkProcessedButton"),
  photoArchiveButton: document.getElementById("photoArchiveButton"),
  photoOpenProblemButton: document.getElementById("photoOpenProblemButton"),
  photoDeleteButton: document.getElementById("photoDeleteButton"),
  photoCreateProblemForm: document.getElementById("photoCreateProblemForm"),
  photoProblemIdInput: document.getElementById("photoProblemIdInput"),
  photoProblemTitleInput: document.getElementById("photoProblemTitleInput"),
  photoProblemDifficultyInput: document.getElementById("photoProblemDifficultyInput"),
  photoProblemTagsInput: document.getElementById("photoProblemTagsInput"),
  photoProblemSourceInput: document.getElementById("photoProblemSourceInput"),
  photoLinkedNameInput: document.getElementById("photoLinkedNameInput"),
  photoCreateProblemButton: document.getElementById("photoCreateProblemButton"),
  exportButton: document.getElementById("exportButton"),
  resetButton: document.getElementById("resetButton"),
  downloadTemplateButton: document.getElementById("downloadTemplateButton"),
  loadDemoButton: document.getElementById("loadDemoButton"),
};

const compilerRuntime = {
  isRunning: false,
  languageId: null,
  statusKind: "idle",
  statusText: "Idle",
  outputText: "Select a problem to start.",
};

const editorRuntime = {
  source: null,
  stdin: null,
};

const layoutRuntime = {
  problemWidthPercent: loadCompilerPanelWidth(),
  isDragging: false,
  pointerId: null,
};

const photoRuntime = {
  selectedPhotoId: "",
  isImporting: false,
};

let state = loadState();
let photoState = loadPhotoState();

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function defaultCompilerState() {
  return {
    selectedProblemId: "",
    drafts: {},
    stdinByProblem: {},
  };
}

function defaultState() {
  return {
    problems: [],
    attempts: [],
    todayPlan: null,
    bank: { columns: deepClone(DEFAULT_BANK_COLUMNS) },
    compiler: defaultCompilerState(),
  };
}

function normalizeDifficulty(raw) {
  const text = String(raw || "").trim().toLowerCase();
  return DIFFICULTIES.has(text) ? text : "medium";
}

function parseTags(raw) {
  if (Array.isArray(raw)) {
    return raw
      .map((value) => String(value || "").trim().toLowerCase())
      .filter(Boolean)
      .filter((value, index, arr) => arr.indexOf(value) === index);
  }
  return String(raw || "")
    .replaceAll("|", ",")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean)
    .filter((value, index, arr) => arr.indexOf(value) === index);
}

function sanitizeProblem(raw) {
  const id = String(raw.id || raw.problem_id || "").trim();
  const title = String(raw.title || raw.name || "").trim();
  if (!id || !title) {
    return null;
  }
  return {
    id,
    title,
    difficulty: normalizeDifficulty(raw.difficulty),
    tags: parseTags(raw.tags),
    url: String(raw.url || "").trim(),
    source: String(raw.source || "leetcode").trim(),
    description: String(raw.description || "").trim(),
    sampleInput: String(raw.sampleInput || raw.sample_input || "").trim(),
    sampleOutput: String(raw.sampleOutput || raw.sample_output || "").trim(),
    starterCode: String(raw.starterCode || raw.starter_code || "").trim(),
    editorMode: String(raw.editorMode || raw.editor_mode || "full_program").trim(),
    solutionEntry: String(raw.solutionEntry || raw.solution_entry || "").trim(),
    runnerTemplate: String(raw.runnerTemplate || raw.runner_template || "").trim(),
    createdAt: String(raw.createdAt || raw.created_at || new Date().toISOString()),
  };
}

function sanitizeAttempt(raw) {
  const problemId = String(raw.problemId || raw.problem_id || "").trim();
  const result = String(raw.result || "").trim().toUpperCase();
  if (!problemId || !RESULTS.has(result)) {
    return null;
  }
  let minutes = Number.parseInt(raw.minutes, 10);
  if (!Number.isFinite(minutes) || minutes < 0) {
    minutes = 0;
  }
  return {
    problemId,
    result,
    minutes,
    note: String(raw.note || "").trim(),
    timestamp: String(raw.timestamp || new Date().toISOString()),
  };
}

function sanitizeColumn(raw) {
  const id = String(raw.id || "").trim().toLowerCase();
  const name = String(raw.name || "").trim();
  if (!id || !name) {
    return null;
  }
  return {
    id,
    name,
    description: String(raw.description || "").trim(),
    keywords: parseTags(raw.keywords),
    problemIds: parseTags(raw.problemIds || raw.problem_ids),
  };
}

function sanitizeCompilerState(rawCompiler, problemMap) {
  const base = defaultCompilerState();
  if (!rawCompiler || typeof rawCompiler !== "object") {
    return base;
  }

  const selectedProblemId = String(rawCompiler.selectedProblemId || "").trim();
  base.selectedProblemId = problemMap.has(selectedProblemId) ? selectedProblemId : "";

  const rawDrafts = rawCompiler.drafts && typeof rawCompiler.drafts === "object" ? rawCompiler.drafts : {};
  for (const [problemId, code] of Object.entries(rawDrafts)) {
    if (problemMap.has(problemId) && typeof code === "string") {
      base.drafts[problemId] = code;
    }
  }

  const rawStdin =
    rawCompiler.stdinByProblem && typeof rawCompiler.stdinByProblem === "object"
      ? rawCompiler.stdinByProblem
      : {};
  for (const [problemId, value] of Object.entries(rawStdin)) {
    if (problemMap.has(problemId) && typeof value === "string") {
      base.stdinByProblem[problemId] = value;
    }
  }

  return base;
}

function sanitizeState(candidate) {
  const base = defaultState();
  if (!candidate || typeof candidate !== "object") {
    return base;
  }

  const problemMap = new Map();
  const rawProblems = Array.isArray(candidate.problems) ? candidate.problems : [];
  for (const item of rawProblems) {
    const problem = sanitizeProblem(item);
    if (problem && !problemMap.has(problem.id)) {
      problemMap.set(problem.id, problem);
    }
  }
  base.problems = Array.from(problemMap.values()).sort((a, b) => a.id.localeCompare(b.id));

  const rawAttempts = Array.isArray(candidate.attempts) ? candidate.attempts : [];
  base.attempts = rawAttempts
    .map(sanitizeAttempt)
    .filter(Boolean)
    .filter((item) => problemMap.has(item.problemId))
    .sort((a, b) => a.timestamp.localeCompare(b.timestamp));

  const rawColumns =
    candidate.bank && Array.isArray(candidate.bank.columns)
      ? candidate.bank.columns
      : DEFAULT_BANK_COLUMNS;
  const columns = [];
  const seen = new Set();
  for (const item of rawColumns) {
    const column = sanitizeColumn(item);
    if (column && !seen.has(column.id)) {
      seen.add(column.id);
      columns.push(column);
    }
  }
  base.bank.columns = columns.length ? columns : deepClone(DEFAULT_BANK_COLUMNS);
  base.compiler = sanitizeCompilerState(candidate.compiler, problemMap);

  if (candidate.todayPlan && typeof candidate.todayPlan === "object") {
    const planIds = Array.isArray(candidate.todayPlan.problemIds)
      ? candidate.todayPlan.problemIds.map((value) => String(value)).filter((id) => problemMap.has(id))
      : [];
    base.todayPlan = {
      date: String(candidate.todayPlan.date || ""),
      generatedAt: String(candidate.todayPlan.generatedAt || ""),
      config: {
        review: Number.parseInt(candidate.todayPlan.config?.review, 10) || 0,
        fresh: Number.parseInt(candidate.todayPlan.config?.fresh, 10) || 0,
        difficulty: String(candidate.todayPlan.config?.difficulty || ""),
        tag: String(candidate.todayPlan.config?.tag || ""),
      },
      problemIds: planIds,
    };
  }

  return base;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return defaultState();
  }
  try {
    return sanitizeState(JSON.parse(raw));
  } catch (_error) {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function defaultPhotoState() {
  return {
    entries: [],
  };
}

function sanitizePhotoEntry(raw) {
  const id = String(raw.id || "").trim();
  const name = String(raw.name || "").trim();
  if (!id || !name) {
    return null;
  }

  const status = String(raw.status || "incoming").trim().toLowerCase();
  return {
    id,
    name,
    relativePath: String(raw.relativePath || raw.relative_path || "").trim(),
    mimeType: String(raw.mimeType || raw.mime_type || "").trim(),
    size: Math.max(0, Number.parseInt(raw.size, 10) || 0),
    previewDataUrl: String(raw.previewDataUrl || raw.preview_data_url || "").trim(),
    sourceFingerprint: String(raw.sourceFingerprint || raw.source_fingerprint || "").trim(),
    linkedProblemId: String(raw.linkedProblemId || raw.linked_problem_id || "").trim(),
    status: PHOTO_STATUSES.has(status) ? status : "incoming",
    createdAt: String(raw.createdAt || raw.created_at || new Date().toISOString()),
    updatedAt: String(raw.updatedAt || raw.updated_at || new Date().toISOString()),
  };
}

function sanitizePhotoState(candidate) {
  const base = defaultPhotoState();
  if (!candidate || typeof candidate !== "object") {
    return base;
  }

  const seen = new Set();
  const rawEntries = Array.isArray(candidate.entries)
    ? candidate.entries
    : Array.isArray(candidate.photos)
      ? candidate.photos
      : [];

  for (const item of rawEntries) {
    const entry = sanitizePhotoEntry(item);
    if (entry && !seen.has(entry.id)) {
      seen.add(entry.id);
      base.entries.push(entry);
    }
  }

  base.entries.sort((left, right) => right.createdAt.localeCompare(left.createdAt));
  return base;
}

function loadPhotoState() {
  const raw = localStorage.getItem(PHOTO_STORAGE_KEY);
  if (!raw) {
    return defaultPhotoState();
  }
  try {
    return sanitizePhotoState(JSON.parse(raw));
  } catch (_error) {
    return defaultPhotoState();
  }
}

function savePhotoState() {
  localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(photoState));
}

function getPhotoEntryById(photoId) {
  return photoState.entries.find((entry) => entry.id === photoId) || null;
}

function buildPhotoFingerprint(file) {
  return [
    file.name || "",
    file.size || 0,
    file.lastModified || 0,
    file.webkitRelativePath || "",
  ].join("|");
}

function formatFileSize(bytes) {
  if (!bytes) {
    return "0 KB";
  }
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function basenameWithoutExtension(name) {
  const text = String(name || "").trim();
  return text.replace(/\.[^.]+$/, "") || text;
}

function makePhotoId() {
  return `PH-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function nextTrustedExamProblemId() {
  let maxNumber = 0;
  for (const problem of state.problems) {
    const match = String(problem.id || "").match(/^KX-(\d+)$/i);
    if (match) {
      maxNumber = Math.max(maxNumber, Number.parseInt(match[1], 10) || 0);
    }
  }
  return `KX-${String(maxNumber + 1).padStart(3, "0")}`;
}

function getPhotoLinkedProblem(photoEntry) {
  if (!photoEntry?.linkedProblemId) {
    return null;
  }
  return getProblemById(photoEntry.linkedProblemId);
}

function choosePhotoSelection() {
  const selected = getPhotoEntryById(photoRuntime.selectedPhotoId);
  if (selected) {
    return selected;
  }
  const first = photoState.entries[0] || null;
  photoRuntime.selectedPhotoId = first?.id || "";
  return first;
}

function updatePhotoEntry(photoId, patch) {
  const entry = getPhotoEntryById(photoId);
  if (!entry) {
    return null;
  }
  Object.assign(entry, patch, { updatedAt: new Date().toISOString() });
  photoState.entries.sort((left, right) => right.createdAt.localeCompare(left.createdAt));
  savePhotoState();
  return entry;
}

function removePhotoEntry(photoId) {
  const nextEntries = photoState.entries.filter((entry) => entry.id !== photoId);
  photoState.entries = nextEntries;
  if (photoRuntime.selectedPhotoId === photoId) {
    photoRuntime.selectedPhotoId = nextEntries[0]?.id || "";
  }
  savePhotoState();
}

function loadImageElement(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Image preview could not be loaded."));
    image.src = url;
  });
}

async function buildPreviewDataUrl(file) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = await loadImageElement(objectUrl);
    const maxDimension = 900;
    const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
    const width = Math.max(1, Math.round(image.naturalWidth * scale));
    const height = Math.max(1, Math.round(image.naturalHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Canvas is not available.");
    }
    context.drawImage(image, 0, 0, width, height);
    const outputType = file.type === "image/png" ? "image/png" : "image/jpeg";
    const previewDataUrl =
      outputType === "image/png"
        ? canvas.toDataURL(outputType)
        : canvas.toDataURL(outputType, 0.82);
    return { previewDataUrl, width, height };
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function clampNumber(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function loadCompilerPanelWidth() {
  const rawValue = Number.parseFloat(localStorage.getItem(COMPILER_LAYOUT_STORAGE_KEY) || "");
  if (!Number.isFinite(rawValue)) {
    return 36;
  }
  return clampNumber(rawValue, COMPILER_PANEL_MIN_PERCENT, COMPILER_PANEL_MAX_PERCENT);
}

function saveCompilerPanelWidth() {
  localStorage.setItem(
    COMPILER_LAYOUT_STORAGE_KEY,
    String(layoutRuntime.problemWidthPercent)
  );
}

function isDesktopCompilerLayout() {
  return window.innerWidth > COMPILER_STACK_BREAKPOINT;
}

function resizeRichEditors() {
  if (!hasRichEditors()) {
    return;
  }
  window.requestAnimationFrame(() => {
    editorRuntime.source?.resize(true);
    editorRuntime.stdin?.resize(true);
  });
}

function applyCompilerLayout() {
  if (!dom.compilerWorkspace) {
    return;
  }

  if (!isDesktopCompilerLayout()) {
    dom.compilerWorkspace.style.removeProperty("--problem-panel-width");
  } else {
    dom.compilerWorkspace.style.setProperty(
      "--problem-panel-width",
      `${layoutRuntime.problemWidthPercent}%`
    );
  }

  if (dom.compilerSplitter) {
    dom.compilerSplitter.setAttribute("aria-valuemin", String(COMPILER_PANEL_MIN_PERCENT));
    dom.compilerSplitter.setAttribute("aria-valuemax", String(COMPILER_PANEL_MAX_PERCENT));
    dom.compilerSplitter.setAttribute(
      "aria-valuenow",
      String(Math.round(layoutRuntime.problemWidthPercent))
    );
  }

  resizeRichEditors();
}

function setCompilerLayoutFromPointer(clientX) {
  if (!dom.compilerWorkspace || !dom.compilerSplitter) {
    return;
  }

  const bounds = dom.compilerWorkspace.getBoundingClientRect();
  if (!bounds.width) {
    return;
  }

  const splitterHalf = (dom.compilerSplitter.offsetWidth || 18) / 2;
  const rawWidth = clientX - bounds.left - splitterHalf;
  const nextPercent = clampNumber(
    (rawWidth / bounds.width) * 100,
    COMPILER_PANEL_MIN_PERCENT,
    COMPILER_PANEL_MAX_PERCENT
  );

  if (Math.abs(nextPercent - layoutRuntime.problemWidthPercent) < 0.1) {
    return;
  }

  layoutRuntime.problemWidthPercent = Number(nextPercent.toFixed(1));
  applyCompilerLayout();
  saveCompilerPanelWidth();
}

function stopCompilerPanelResize() {
  if (!layoutRuntime.isDragging) {
    return;
  }

  if (
    layoutRuntime.pointerId !== null &&
    dom.compilerSplitter?.hasPointerCapture?.(layoutRuntime.pointerId)
  ) {
    dom.compilerSplitter.releasePointerCapture(layoutRuntime.pointerId);
  }

  layoutRuntime.isDragging = false;
  layoutRuntime.pointerId = null;
  document.body.classList.remove("is-resizing-panels");
  saveCompilerPanelWidth();
}

function handleCompilerSplitterPointerDown(event) {
  if (!isDesktopCompilerLayout() || !dom.compilerSplitter) {
    return;
  }

  layoutRuntime.isDragging = true;
  layoutRuntime.pointerId = event.pointerId ?? null;
  dom.compilerSplitter.setPointerCapture?.(event.pointerId);
  document.body.classList.add("is-resizing-panels");
  setCompilerLayoutFromPointer(event.clientX);
  event.preventDefault();
}

function handleCompilerSplitterPointerMove(event) {
  if (!layoutRuntime.isDragging) {
    return;
  }
  setCompilerLayoutFromPointer(event.clientX);
}

function handleCompilerSplitterPointerUp() {
  stopCompilerPanelResize();
}

function handleCompilerSplitterKeyDown(event) {
  if (!isDesktopCompilerLayout()) {
    return;
  }

  let nextPercent = layoutRuntime.problemWidthPercent;
  if (event.key === "ArrowLeft") {
    nextPercent -= 2;
  } else if (event.key === "ArrowRight") {
    nextPercent += 2;
  } else if (event.key === "Home") {
    nextPercent = COMPILER_PANEL_MIN_PERCENT;
  } else if (event.key === "End") {
    nextPercent = COMPILER_PANEL_MAX_PERCENT;
  } else {
    return;
  }

  event.preventDefault();
  layoutRuntime.problemWidthPercent = clampNumber(
    nextPercent,
    COMPILER_PANEL_MIN_PERCENT,
    COMPILER_PANEL_MAX_PERCENT
  );
  applyCompilerLayout();
  saveCompilerPanelWidth();
}

function hasRichEditors() {
  return Boolean(editorRuntime.source && editorRuntime.stdin);
}

function initializeEditors() {
  if (typeof window.ace === "undefined") {
    return;
  }
  if (editorRuntime.source || editorRuntime.stdin) {
    return;
  }
  if (!dom.sourceCodeEditor || !dom.stdinEditor) {
    return;
  }

  dom.sourceCodeEditor.style.display = "block";
  dom.stdinEditor.style.display = "block";

  editorRuntime.source = window.ace.edit(dom.sourceCodeEditor);
  editorRuntime.source.setTheme("ace/theme/github_dark");
  editorRuntime.source.session.setMode("ace/mode/c_cpp");
  editorRuntime.source.session.setUseWorker(false);
  editorRuntime.source.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    tabSize: 2,
    useSoftTabs: true,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
  });
  editorRuntime.source.renderer.setScrollMargin(12, 12, 0, 0);

  editorRuntime.stdin = window.ace.edit(dom.stdinEditor);
  editorRuntime.stdin.setTheme("ace/theme/github_dark");
  editorRuntime.stdin.session.setMode("ace/mode/text");
  editorRuntime.stdin.session.setUseWorker(false);
  editorRuntime.stdin.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    tabSize: 2,
    useSoftTabs: true,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
  });
  editorRuntime.stdin.renderer.setScrollMargin(12, 12, 0, 0);

  dom.sourceCodeInput.classList.add("editor-hidden");
  dom.stdinInput.classList.add("editor-hidden");
  resizeRichEditors();
}

function getSourceBufferValue() {
  if (editorRuntime.source) {
    return editorRuntime.source.getValue();
  }
  return dom.sourceCodeInput.value;
}

function setSourceBufferValue(value) {
  const nextValue = String(value ?? "");
  if (editorRuntime.source) {
    editorRuntime.source.setValue(nextValue, -1);
  }
  dom.sourceCodeInput.value = nextValue;
}

function getInputBufferValue() {
  if (editorRuntime.stdin) {
    return editorRuntime.stdin.getValue();
  }
  return dom.stdinInput.value;
}

function setInputBufferValue(value) {
  const nextValue = String(value ?? "");
  if (editorRuntime.stdin) {
    editorRuntime.stdin.setValue(nextValue, -1);
  }
  dom.stdinInput.value = nextValue;
}

function parseTimestamp(text) {
  const date = new Date(text);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function addHours(date, amount) {
  return new Date(date.valueOf() + amount * 60 * 60 * 1000);
}

function addDays(date, amount) {
  return addHours(date, amount * 24);
}

function buildProgressMap() {
  const map = new Map();
  for (const problem of state.problems) {
    map.set(problem.id, {
      attempts: 0,
      acCount: 0,
      streakAc: 0,
      lastResult: null,
      lastAttemptAt: null,
      nextDueAt: null,
    });
  }

  const grouped = new Map();
  for (const attempt of state.attempts) {
    if (!grouped.has(attempt.problemId)) {
      grouped.set(attempt.problemId, []);
    }
    grouped.get(attempt.problemId).push(attempt);
  }

  for (const [problemId, list] of grouped.entries()) {
    const entry = map.get(problemId);
    if (!entry) {
      continue;
    }
    list.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
    for (const attempt of list) {
      const stamp = parseTimestamp(attempt.timestamp);
      entry.attempts += 1;
      entry.lastResult = attempt.result;
      entry.lastAttemptAt = stamp ? stamp.toISOString() : entry.lastAttemptAt;
      if (attempt.result === "AC") {
        entry.acCount += 1;
        entry.streakAc += 1;
        const idx = Math.min(entry.streakAc - 1, REVIEW_INTERVAL_DAYS.length - 1);
        if (stamp) {
          entry.nextDueAt = addDays(stamp, REVIEW_INTERVAL_DAYS[idx]).toISOString();
        }
      } else {
        entry.streakAc = 0;
        if (stamp) {
          entry.nextDueAt = addHours(stamp, 12).toISOString();
        }
      }
    }
  }

  return map;
}

function reviewStatus(progress, now) {
  if (!progress || progress.attempts === 0) {
    return "new";
  }
  if (!progress.nextDueAt) {
    return "review_due";
  }
  const dueDate = parseTimestamp(progress.nextDueAt);
  if (!dueDate || dueDate <= now) {
    return "review_due";
  }
  return "review_wait";
}

function keywordMatches(keyword, tag) {
  if (keyword === tag) {
    return true;
  }
  return keyword.includes(tag) || tag.includes(keyword);
}

function normalizeSourceText(source) {
  return String(source || "").trim().toLowerCase();
}

function isTrustedExamProblem(problemOrSource) {
  const source =
    typeof problemOrSource === "string" ? problemOrSource : problemOrSource?.source || "";
  const text = normalizeSourceText(source);
  return (
    text === "\u53ef\u4fe1\u8003\u8bd5" ||
    text === "\u8003\u8bd5\u771f\u9898" ||
    text === "\u8003\u8bd5\u771f\u98982" ||
    text === "trusted exam" ||
    text === "trusted_exam"
  );
}

function stripLeadingCommentBlock(text) {
  const raw = String(text ?? "");
  const match = raw.match(/^\s*\/\*[\s\S]*?\*\/\s*/);
  if (!match) {
    return raw;
  }
  return raw.slice(match[0].length);
}

function applyTrustedExamHeader(problem, code) {
  const raw = String(code ?? "");
  if (!isTrustedExamProblem(problem)) {
    return raw;
  }

  const normalized = raw.replace(/^\uFEFF/, "");
  const body = stripLeadingCommentBlock(normalized).replace(/^\s+/, "");
  if (!body) {
    return TRUSTED_EXAM_SHARED_HEADER;
  }
  return `${TRUSTED_EXAM_SHARED_HEADER}\n\n${body}`.trimEnd();
}

function inColumn(problem, column) {
  const id = problem.id.toLowerCase();
  if (column.problemIds.includes(id)) {
    return true;
  }
  if (!problem.tags.length || !column.keywords.length) {
    return false;
  }
  for (const tag of problem.tags) {
    for (const keyword of column.keywords) {
      if (keywordMatches(keyword, tag)) {
        return true;
      }
    }
  }
  return false;
}

function getProblemById(problemId) {
  return state.problems.find((problem) => problem.id === problemId) || null;
}

function defaultStarterCode(problem) {
  const base = problem && problem.starterCode ? problem.starterCode : GENERIC_CPP_TEMPLATE;
  return applyTrustedExamHeader(problem, base);
}

function isSolutionClassProblem(problem) {
  return Boolean(problem && problem.editorMode === "solution_class");
}

function buildExecutableSource(problem, sourceCode) {
  if (!isSolutionClassProblem(problem)) {
    return sourceCode;
  }
  const template = problem.runnerTemplate || "__USER_CODE__";
  return template.replace("__USER_CODE__", sourceCode);
}

function compilerModeLabel(problem) {
  if (isSolutionClassProblem(problem)) {
    return "Solution template only. main() is injected automatically.";
  }
  return "Full program mode. Your code should include main().";
}

function sourceCodeLabel(problem) {
  return isSolutionClassProblem(problem) ? "Solution Template" : "Source Code";
}

function stdinLabel(problem) {
  return isSolutionClassProblem(problem) ? "Local Test Input" : "Standard Input";
}

function getSelectedCompilerProblem() {
  if (state.compiler.selectedProblemId) {
    return getProblemById(state.compiler.selectedProblemId);
  }
  return state.problems[0] || null;
}

function ensureCompilerSelection() {
  const selected = getSelectedCompilerProblem();
  if (!selected) {
    state.compiler.selectedProblemId = "";
    return null;
  }
  state.compiler.selectedProblemId = selected.id;
  if (!state.compiler.drafts[selected.id]) {
    state.compiler.drafts[selected.id] = defaultStarterCode(selected);
  }
  if (!Object.prototype.hasOwnProperty.call(state.compiler.stdinByProblem, selected.id)) {
    state.compiler.stdinByProblem[selected.id] = selected.sampleInput || "";
  }
  return selected;
}

function getCompilerCode(problem) {
  const draft = state.compiler.drafts[problem.id];
  if (typeof draft === "string") {
    return applyTrustedExamHeader(problem, draft);
  }
  return defaultStarterCode(problem);
}

function getCompilerInput(problem) {
  if (Object.prototype.hasOwnProperty.call(state.compiler.stdinByProblem, problem.id)) {
    return state.compiler.stdinByProblem[problem.id];
  }
  return problem.sampleInput || "";
}

function setCompilerDraft(problemId, code) {
  state.compiler.drafts[problemId] = code;
}

function setCompilerInput(problemId, value) {
  state.compiler.stdinByProblem[problemId] = value;
}

function snapshotCompilerBuffers() {
  const problem = getSelectedCompilerProblem();
  if (!problem || !dom.sourceCodeInput || !dom.stdinInput) {
    return;
  }
  if (
    dom.sourceCodeInput.dataset.hydrated !== "true" ||
    dom.stdinInput.dataset.hydrated !== "true"
  ) {
    return;
  }
  setCompilerDraft(problem.id, getSourceBufferValue());
  setCompilerInput(problem.id, getInputBufferValue());
}

function formatDateTime(text) {
  if (!text) {
    return "-";
  }
  const date = parseTimestamp(text);
  if (!date) {
    return "-";
  }
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
}

function showStatus(text, type = "info") {
  dom.statusBar.textContent = text;
  dom.statusBar.style.color = type === "error" ? "#b83b31" : "#6a655b";
}

function setRunState(kind, label, outputText) {
  compilerRuntime.statusKind = kind;
  compilerRuntime.statusText = label;
  if (typeof outputText === "string") {
    compilerRuntime.outputText = outputText;
  }
  dom.runStatusChip.className = `run-status ${kind}`;
  dom.runStatusChip.textContent = label;
  dom.outputBlock.textContent = compilerRuntime.outputText;
}

function setProblemSelectOptions() {
  dom.attemptProblemSelect.innerHTML = "";
  if (!state.problems.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No problems. Add or import first.";
    dom.attemptProblemSelect.appendChild(option);
    return;
  }
  for (const problem of state.problems) {
    const option = document.createElement("option");
    option.value = problem.id;
    option.textContent = `${problem.id} | ${problem.title}`;
    dom.attemptProblemSelect.appendChild(option);
  }
}

function renderStats(progressMap) {
  const now = new Date();
  const total = state.problems.length;
  let attempted = 0;
  let solved = 0;
  let dueReview = 0;
  for (const problem of state.problems) {
    const progress = progressMap.get(problem.id);
    if (progress && progress.attempts > 0) {
      attempted += 1;
    }
    if (progress && progress.acCount > 0) {
      solved += 1;
    }
    if (reviewStatus(progress, now) === "review_due" && progress && progress.attempts > 0) {
      dueReview += 1;
    }
  }

  const cards = [
    { key: "Problems", value: total },
    { key: "Attempted", value: attempted },
    { key: "Solved", value: solved },
    { key: "Due Review", value: dueReview },
    { key: "Attempts", value: state.attempts.length },
  ];
  dom.statsCards.innerHTML = "";
  for (const item of cards) {
    const card = document.createElement("div");
    card.className = "stat";
    card.innerHTML = `<div class="k">${item.key}</div><div class="v">${item.value}</div>`;
    dom.statsCards.appendChild(card);
  }

  const metrics = new Map();
  const problemById = new Map(state.problems.map((problem) => [problem.id, problem]));
  for (const attempt of state.attempts) {
    const problem = problemById.get(attempt.problemId);
    if (!problem) {
      continue;
    }
    for (const tag of problem.tags) {
      if (!metrics.has(tag)) {
        metrics.set(tag, { attempts: 0, ac: 0 });
      }
      const row = metrics.get(tag);
      row.attempts += 1;
      if (attempt.result === "AC") {
        row.ac += 1;
      }
    }
  }

  const weak = [];
  for (const [tag, row] of metrics.entries()) {
    if (row.attempts < 2) {
      continue;
    }
    weak.push({ tag, rate: row.ac / row.attempts, attempts: row.attempts });
  }
  weak.sort((a, b) => a.rate - b.rate || b.attempts - a.attempts || a.tag.localeCompare(b.tag));

  dom.weakTagsList.innerHTML = "";
  if (!weak.length) {
    const item = document.createElement("li");
    item.textContent = "Need at least 2 attempts per tag to score weakness.";
    dom.weakTagsList.appendChild(item);
    return;
  }
  for (const row of weak.slice(0, 5)) {
    const item = document.createElement("li");
    item.textContent = `${row.tag}: ${(row.rate * 100).toFixed(0)}% AC over ${row.attempts} attempts`;
    dom.weakTagsList.appendChild(item);
  }
}

function renderBankBoard(progressMap) {
  const now = new Date();
  dom.bankBoard.innerHTML = "";
  for (const column of state.bank.columns) {
    const columnProblems = state.problems.filter((problem) => inColumn(problem, column));
    const attempted = columnProblems.filter((problem) => (progressMap.get(problem.id)?.attempts || 0) > 0).length;
    const solved = columnProblems.filter((problem) => (progressMap.get(problem.id)?.acCount || 0) > 0).length;
    const due = columnProblems.filter(
      (problem) =>
        reviewStatus(progressMap.get(problem.id), now) === "review_due" &&
        (progressMap.get(problem.id)?.attempts || 0) > 0
    ).length;

    const card = document.createElement("button");
    card.type = "button";
    card.className = "bank-card";
    card.innerHTML = `
      <h4>${column.name}</h4>
      <div class="bank-meta">id: ${column.id}</div>
      <div class="bank-meta">total: ${columnProblems.length}</div>
      <div class="bank-meta">attempted: ${attempted} | solved: ${solved} | due: ${due}</div>
      <div class="bank-meta">${column.description || "-"}</div>
    `;
    card.addEventListener("click", () => {
      dom.filterColumnInput.value = column.id;
      renderProblemTable(progressMap);
      showStatus(`Applied column filter: ${column.id}`);
    });
    dom.bankBoard.appendChild(card);
  }
}

function refreshColumnFilterOptions() {
  const previous = dom.filterColumnInput.value;
  dom.filterColumnInput.innerHTML = `<option value="">all columns</option>`;
  for (const column of state.bank.columns) {
    const option = document.createElement("option");
    option.value = column.id;
    option.textContent = `${column.id} | ${column.name}`;
    dom.filterColumnInput.appendChild(option);
  }
  if ([...dom.filterColumnInput.options].some((option) => option.value === previous)) {
    dom.filterColumnInput.value = previous;
  }
}

function renderProblemTable(progressMap) {
  const now = new Date();
  const query = dom.searchInput.value.trim().toLowerCase();
  const difficulty = dom.filterDifficultyInput.value.trim().toLowerCase();
  const tag = dom.filterTagInput.value.trim().toLowerCase();
  const columnId = dom.filterColumnInput.value.trim().toLowerCase();
  const column = columnId ? state.bank.columns.find((item) => item.id === columnId) : null;

  let rows = [...state.problems];
  if (query) {
    rows = rows.filter(
      (problem) =>
        problem.id.toLowerCase().includes(query) || problem.title.toLowerCase().includes(query)
    );
  }
  if (difficulty) {
    rows = rows.filter((problem) => problem.difficulty === difficulty);
  }
  if (tag) {
    rows = rows.filter((problem) => problem.tags.includes(tag));
  }
  if (column) {
    rows = rows.filter((problem) => inColumn(problem, column));
  }

  const difficultyRank = { medium: 0, easy: 1, hard: 2 };
  const statusRank = { review_due: 0, new: 1, review_wait: 2 };
  rows.sort((left, right) => {
    const leftStatus = reviewStatus(progressMap.get(left.id), now);
    const rightStatus = reviewStatus(progressMap.get(right.id), now);
    return (
      statusRank[leftStatus] - statusRank[rightStatus] ||
      difficultyRank[left.difficulty] - difficultyRank[right.difficulty] ||
      left.id.localeCompare(right.id)
    );
  });

  dom.problemTableBody.innerHTML = "";
  for (const problem of rows) {
    const progress = progressMap.get(problem.id) || { attempts: 0, nextDueAt: null };
    const status = reviewStatus(progress, now);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${problem.id}</td>
      <td>${problem.url ? `<a href="${problem.url}" target="_blank" rel="noreferrer">${problem.title}</a>` : problem.title}</td>
      <td>${problem.difficulty}</td>
      <td>${problem.tags.join(", ") || "-"}</td>
      <td><span class="pill ${status}">${status}</span></td>
      <td>${progress.attempts}</td>
      <td>${formatDateTime(progress.nextDueAt)}</td>
      <td><button type="button" class="mini-button" data-open-compiler="${problem.id}">Open</button></td>
    `;
    dom.problemTableBody.appendChild(tr);
  }
}

function renderAttempts() {
  dom.attemptList.innerHTML = "";
  if (!state.attempts.length) {
    const item = document.createElement("li");
    item.textContent = "No attempts yet.";
    dom.attemptList.appendChild(item);
    return;
  }
  const recent = [...state.attempts]
    .sort((left, right) => right.timestamp.localeCompare(left.timestamp))
    .slice(0, 20);
  for (const attempt of recent) {
    const item = document.createElement("li");
    item.textContent = `${formatDateTime(attempt.timestamp)} | ${attempt.problemId} | ${
      attempt.result
    } | ${attempt.minutes}m${attempt.note ? ` | ${attempt.note}` : ""}`;
    dom.attemptList.appendChild(item);
  }
}

function renderTodayPlan() {
  dom.todayPlanList.innerHTML = "";
  if (!state.todayPlan || !state.todayPlan.problemIds.length) {
    const item = document.createElement("li");
    item.textContent = "No plan generated yet.";
    dom.todayPlanList.appendChild(item);
    return;
  }

  const byId = new Map(state.problems.map((problem) => [problem.id, problem]));
  const meta = document.createElement("li");
  meta.textContent = `Date: ${state.todayPlan.date || "-"} | generated: ${formatDateTime(
    state.todayPlan.generatedAt
  )}`;
  dom.todayPlanList.appendChild(meta);

  state.todayPlan.problemIds.forEach((problemId, index) => {
    const problem = byId.get(problemId);
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${problemId}${
      problem ? ` | ${problem.title} [${problem.difficulty}]` : ""
    }`;
    dom.todayPlanList.appendChild(item);
  });
}

function renderPhotoSummary() {
  dom.photoInboxSummary.innerHTML = "";
  const counts = {
    total: photoState.entries.length,
    incoming: 0,
    processed: 0,
    archived: 0,
  };

  for (const entry of photoState.entries) {
    if (Object.prototype.hasOwnProperty.call(counts, entry.status)) {
      counts[entry.status] += 1;
    }
  }

  const items = [
    { label: "Total Photos", value: counts.total },
    { label: "Incoming", value: counts.incoming },
    { label: "Processed", value: counts.processed },
    { label: "Archived", value: counts.archived },
  ];

  for (const item of items) {
    const card = document.createElement("div");
    card.className = "stat";
    card.innerHTML = `<div class="k">${item.label}</div><div class="v">${item.value}</div>`;
    dom.photoInboxSummary.appendChild(card);
  }
}

function renderPhotoGrid() {
  dom.photoInboxGrid.innerHTML = "";
  const selected = choosePhotoSelection();

  if (!photoState.entries.length) {
    const panel = document.createElement("div");
    panel.className = "empty-panel";
    panel.textContent =
      "No photo imported yet. Use Add Photos or Import Folder to bring the incoming screenshots into the inbox.";
    dom.photoInboxGrid.appendChild(panel);
    return;
  }

  for (const entry of photoState.entries) {
    const linkedProblem = getPhotoLinkedProblem(entry);
    const card = document.createElement("article");
    card.className = `photo-card${selected?.id === entry.id ? " selected" : ""}`;
    card.dataset.photoId = entry.id;

    const image = document.createElement("img");
    image.src = entry.previewDataUrl || "";
    image.alt = entry.name;
    image.loading = "lazy";
    card.appendChild(image);

    const body = document.createElement("div");
    body.className = "photo-card-body";
    body.innerHTML = `
      <div class="photo-card-title">${entry.name}</div>
      <div class="photo-card-meta">
        <span class="pill ${entry.status}">${entry.status}</span><br />
        ${formatFileSize(entry.size)}${linkedProblem ? `<br />linked: ${linkedProblem.id}` : ""}
      </div>
    `;
    card.appendChild(body);
    dom.photoInboxGrid.appendChild(card);
  }
}

function fillPhotoProblemForm(photoEntry) {
  const linkedProblem = getPhotoLinkedProblem(photoEntry);
  if (linkedProblem) {
    dom.photoProblemIdInput.value = linkedProblem.id;
    dom.photoProblemTitleInput.value = linkedProblem.title;
    dom.photoProblemDifficultyInput.value = linkedProblem.difficulty;
    dom.photoProblemTagsInput.value = linkedProblem.tags.join("|");
    return;
  }

  const suggestedId = nextTrustedExamProblemId();
  dom.photoProblemIdInput.value = suggestedId;
  dom.photoProblemTitleInput.value = `可信考试题目 ${suggestedId}`;
  dom.photoProblemDifficultyInput.value = "medium";
  dom.photoProblemTagsInput.value = "photo-import|trusted exam";
}

function renderPhotoDetail() {
  const entry = choosePhotoSelection();
  if (!entry) {
    dom.photoDetailEmpty.classList.remove("hidden-block");
    dom.photoDetailContent.classList.add("hidden-block");
    return;
  }

  const linkedProblem = getPhotoLinkedProblem(entry);
  dom.photoDetailEmpty.classList.add("hidden-block");
  dom.photoDetailContent.classList.remove("hidden-block");
  dom.photoPreviewImage.src = entry.previewDataUrl || "";
  dom.photoPreviewImage.alt = entry.name;
  dom.photoLinkedNameInput.value = entry.relativePath || entry.name;
  dom.photoDetailMeta.innerHTML = `
    <div class="photo-meta-line"><strong>File:</strong> ${entry.name}</div>
    <div class="photo-meta-line"><strong>Status:</strong> <span class="pill ${entry.status}">${entry.status}</span></div>
    <div class="photo-meta-line"><strong>Size:</strong> ${formatFileSize(entry.size)}</div>
    <div class="photo-meta-line"><strong>Path:</strong> ${entry.relativePath || "(single file import)"}</div>
    <div class="photo-meta-line"><strong>Imported:</strong> ${formatDateTime(entry.createdAt)}</div>
    <div class="photo-meta-line"><strong>Problem:</strong> ${
      linkedProblem ? `${linkedProblem.id} | ${linkedProblem.title}` : "Not created yet"
    }</div>
  `;

  dom.photoMarkIncomingButton.disabled = entry.status === "incoming";
  dom.photoMarkProcessedButton.disabled = entry.status === "processed";
  dom.photoArchiveButton.disabled = entry.status === "archived";
  dom.photoOpenProblemButton.disabled = !linkedProblem;
  dom.photoCreateProblemButton.textContent = linkedProblem
    ? "Update Problem Record"
    : "Create Problem Record";
  fillPhotoProblemForm(entry);
}

function renderPhotoInbox() {
  renderPhotoSummary();
  renderPhotoGrid();
  renderPhotoDetail();
}

function renderCompiler() {
  const selected = ensureCompilerSelection();
  dom.compilerProblemSelect.innerHTML = "";
  if (!state.problems.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No problems available";
    dom.compilerProblemSelect.appendChild(option);
    dom.compilerProblemMeta.textContent = "Add or import a problem first.";
    dom.problemStatement.textContent = "";
    dom.sampleInputBlock.textContent = "-";
    dom.sampleOutputBlock.textContent = "-";
    setSourceBufferValue("");
    setInputBufferValue("");
    dom.runCodeButton.disabled = true;
    dom.fillSampleInputButton.disabled = true;
    dom.resetCodeButton.disabled = true;
    dom.downloadFrameButton.disabled = true;
    dom.sourceCodeLabel.firstChild.textContent = "Source Code";
    dom.stdinLabel.firstChild.textContent = "Standard Input";
    setRunState("idle", "Idle", "Select a problem to start.");
    resizeRichEditors();
    return;
  }

  for (const problem of state.problems) {
    const option = document.createElement("option");
    option.value = problem.id;
    option.textContent = `${problem.id} | ${problem.title}`;
    dom.compilerProblemSelect.appendChild(option);
  }

  if (!selected) {
    return;
  }

  dom.compilerProblemSelect.value = selected.id;
  dom.compilerProblemMeta.innerHTML = `
    <strong>${selected.id}</strong> | ${selected.title}<br />
    difficulty: ${selected.difficulty} | source: ${selected.source || "-"}${
      selected.solutionEntry ? ` | entry: Solution::${selected.solutionEntry}` : ""
    }<br />
    tags: ${selected.tags.join(", ") || "-"}<br />
    mode: ${compilerModeLabel(selected)}
  `;
  dom.problemStatement.textContent =
    selected.description || "No problem statement yet. You can still compile and run code.";
  dom.sampleInputBlock.textContent = selected.sampleInput || "(empty)";
  dom.sampleOutputBlock.textContent = selected.sampleOutput || "(empty)";
  dom.compilerLanguageLabel.textContent = COMPILER_SERVICE_LABEL;
  dom.sourceCodeLabel.firstChild.textContent = sourceCodeLabel(selected);
  dom.stdinLabel.firstChild.textContent = stdinLabel(selected);
  setSourceBufferValue(getCompilerCode(selected));
  setInputBufferValue(getCompilerInput(selected));
  dom.sourceCodeInput.dataset.hydrated = "true";
  dom.stdinInput.dataset.hydrated = "true";
  dom.runCodeButton.disabled = compilerRuntime.isRunning;
  dom.fillSampleInputButton.disabled = false;
  dom.resetCodeButton.disabled = false;
  dom.downloadFrameButton.disabled = false;
  setRunState(compilerRuntime.statusKind, compilerRuntime.statusText, compilerRuntime.outputText);
  resizeRichEditors();
}

function rerenderAll() {
  snapshotCompilerBuffers();
  const progressMap = buildProgressMap();
  renderPhotoInbox();
  setProblemSelectOptions();
  refreshColumnFilterOptions();
  renderStats(progressMap);
  renderBankBoard(progressMap);
  renderProblemTable(progressMap);
  renderAttempts();
  renderTodayPlan();
  renderCompiler();
}

function mergeProblem(existing, incoming) {
  return {
    id: incoming.id,
    title: incoming.title || existing?.title || "",
    difficulty: incoming.difficulty || existing?.difficulty || "medium",
    tags: incoming.tags.length ? incoming.tags : existing?.tags || [],
    url: incoming.url || existing?.url || "",
    source: incoming.source || existing?.source || "",
    description: incoming.description || existing?.description || "",
    sampleInput: incoming.sampleInput || existing?.sampleInput || "",
    sampleOutput: incoming.sampleOutput || existing?.sampleOutput || "",
    starterCode: incoming.starterCode || existing?.starterCode || "",
    editorMode: incoming.editorMode || existing?.editorMode || "full_program",
    solutionEntry: incoming.solutionEntry || existing?.solutionEntry || "",
    runnerTemplate: incoming.runnerTemplate || existing?.runnerTemplate || "",
    createdAt: existing?.createdAt || incoming.createdAt || new Date().toISOString(),
  };
}

function upsertProblem(problem, overwrite) {
  const index = state.problems.findIndex((item) => item.id === problem.id);
  if (index === -1) {
    state.problems.push(problem);
    state.problems.sort((left, right) => left.id.localeCompare(right.id));
    return { created: true, updated: false };
  }
  if (!overwrite) {
    return { created: false, updated: false };
  }
  state.problems[index] = mergeProblem(state.problems[index], problem);
  state.problems.sort((left, right) => left.id.localeCompare(right.id));
  return { created: false, updated: true };
}

function ensureBuiltinProblems() {
  let changed = false;
  for (const item of BUILTIN_PROBLEMS) {
    const problem = sanitizeProblem(item);
    if (!problem) {
      continue;
    }
    const result = upsertProblem(problem, true);
    if (result.created || result.updated) {
      changed = true;
    }
    if (problem.id === "KX-001") {
      const existingDraft = state.compiler.drafts[problem.id];
      if (!existingDraft || existingDraft === LEGACY_KX001_STARTER_CODE) {
        state.compiler.drafts[problem.id] = defaultStarterCode(problem);
      }
      const existingInput = state.compiler.stdinByProblem[problem.id];
      if (!existingInput || existingInput === LEGACY_KX001_SAMPLE_INPUT) {
        state.compiler.stdinByProblem[problem.id] = problem.sampleInput || "";
      }
    }
  }
  return changed;
}

async function resolveCppLanguageId() {
  if (compilerRuntime.languageId) {
    return compilerRuntime.languageId;
  }

  const response = await fetch(JUDGE0_LANGUAGES_URL);
  if (!response.ok) {
    throw new Error(`Language lookup failed (${response.status})`);
  }

  const languages = await response.json();
  for (const preferredId of PREFERRED_CPP_LANGUAGE_IDS) {
    const match = languages.find(
      (language) => language.id === preferredId && /^C\+\+/.test(language.name) && !language.is_archived
    );
    if (match) {
      compilerRuntime.languageId = match.id;
      return compilerRuntime.languageId;
    }
  }

  const fallback = languages.find(
    (language) => /^C\+\+/.test(language.name) && !language.is_archived
  );
  if (!fallback) {
    throw new Error("No active C++ compiler found on Judge0.");
  }
  compilerRuntime.languageId = fallback.id;
  return compilerRuntime.languageId;
}

function formatExecutionResult(result, problem, stdinText) {
  const blocks = [];
  const statusText = result.status?.description || "Unknown";
  blocks.push(`Status: ${statusText}`);
  if (result.compile_output) {
    blocks.push(`Compile Output:\n${result.compile_output}`);
  }
  if (result.stderr) {
    blocks.push(`Stderr:\n${result.stderr}`);
  }
  if (result.stdout !== null && result.stdout !== undefined) {
    blocks.push(`Stdout:\n${result.stdout || "(empty)"}`);
  }
  if (result.message) {
    blocks.push(`Message:\n${result.message}`);
  }
  blocks.push(`Time: ${result.time || "-"} s`);
  blocks.push(`Memory: ${result.memory || "-"} KB`);

  const sampleInput = (problem.sampleInput || "").trim();
  const sampleOutput = (problem.sampleOutput || "").trim();
  const currentInput = (stdinText || "").trim();
  const currentOutput = (result.stdout || "").trim();
  if (sampleInput && sampleOutput && currentInput === sampleInput) {
    blocks.push(`Sample Check: ${currentOutput === sampleOutput ? "PASS" : "FAIL"}`);
  }

  return blocks.join("\n\n");
}

function downloadFullFrameForProblem(problem) {
  if (!problem) {
    return;
  }
  snapshotCompilerBuffers();
  const sourceCode = getCompilerCode(problem);
  const fullSource = buildExecutableSource(problem, sourceCode);
  downloadFile(`${problem.id.toLowerCase()}-full-frame.cpp`, fullSource, "text/plain");
}

function syncCompilerSelection(problemId) {
  snapshotCompilerBuffers();
  state.compiler.selectedProblemId = problemId;
  const problem = ensureCompilerSelection();
  saveState();
  renderCompiler();
  return problem;
}

async function runCurrentCode() {
  const problem = ensureCompilerSelection();
  if (!problem) {
    showStatus("No problem selected.", "error");
    return;
  }

  snapshotCompilerBuffers();
  const sourceCode = getCompilerCode(problem).trim();
  const stdinText = getCompilerInput(problem);
  const executableSource = buildExecutableSource(problem, sourceCode);

  if (!sourceCode) {
    setRunState("error", "Error", "Source code is empty.");
    showStatus("Source code is empty.", "error");
    return;
  }

  compilerRuntime.isRunning = true;
  dom.runCodeButton.disabled = true;
  setRunState("running", "Running", "Submitting code to Judge0...");

  try {
    const languageId = await resolveCppLanguageId();
    const response = await fetch(JUDGE0_SUBMISSIONS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language_id: languageId,
        source_code: executableSource,
        stdin: stdinText,
        cpu_time_limit: 2,
        memory_limit: 262144,
      }),
    });

    if (!response.ok) {
      throw new Error(`Compile request failed (${response.status})`);
    }

    const result = await response.json();
    const success = result.status?.id === 3;
    setRunState(
      success ? "success" : "error",
      result.status?.description || (success ? "Accepted" : "Error"),
      formatExecutionResult(result, problem, stdinText)
    );
    showStatus(`Run finished for ${problem.id}.`);
  } catch (error) {
    setRunState(
      "error",
      "Error",
      `Run failed.\n\n${error.message}\n\nCheck your internet connection and try again.`
    );
    showStatus(`Run failed: ${error.message}`, "error");
  } finally {
    compilerRuntime.isRunning = false;
    dom.runCodeButton.disabled = false;
    saveState();
  }
}

function handleAddProblem(event) {
  event.preventDefault();
  const problem = sanitizeProblem({
    id: document.getElementById("problemIdInput").value,
    title: document.getElementById("problemTitleInput").value,
    difficulty: document.getElementById("problemDifficultyInput").value,
    tags: document.getElementById("problemTagsInput").value,
    url: document.getElementById("problemUrlInput").value,
    source: document.getElementById("problemSourceInput").value,
    createdAt: new Date().toISOString(),
  });
  if (!problem) {
    showStatus("Problem ID and title are required.", "error");
    return;
  }
  const result = upsertProblem(problem, false);
  if (!result.created) {
    showStatus(`Problem id already exists: ${problem.id}`, "error");
    return;
  }
  ensureCompilerSelection();
  saveState();
  rerenderAll();
  event.target.reset();
  document.getElementById("problemDifficultyInput").value = "medium";
  document.getElementById("problemSourceInput").value = "leetcode";
  showStatus(`Added problem: ${problem.id}`);
}

function handleRecordAttempt(event) {
  event.preventDefault();
  if (!state.problems.length) {
    showStatus("No problems available. Add or import first.", "error");
    return;
  }
  const attempt = sanitizeAttempt({
    problemId: dom.attemptProblemSelect.value,
    result: document.getElementById("attemptResultInput").value,
    minutes: document.getElementById("attemptMinutesInput").value,
    note: document.getElementById("attemptNoteInput").value,
    timestamp: new Date().toISOString(),
  });
  if (!attempt) {
    showStatus("Invalid attempt record.", "error");
    return;
  }
  if (!getProblemById(attempt.problemId)) {
    showStatus("Selected problem does not exist.", "error");
    return;
  }
  state.attempts.push(attempt);
  state.attempts.sort((left, right) => left.timestamp.localeCompare(right.timestamp));
  saveState();
  rerenderAll();
  event.target.reset();
  document.getElementById("attemptMinutesInput").value = "0";
  showStatus(`Recorded: ${attempt.problemId} ${attempt.result}`);
}

function generateTodayPlan(reviewCount, freshCount, difficulty, tag) {
  const now = new Date();
  const progressMap = buildProgressMap();
  let candidates = [...state.problems];
  if (difficulty) {
    candidates = candidates.filter((problem) => problem.difficulty === difficulty);
  }
  if (tag) {
    candidates = candidates.filter((problem) => problem.tags.includes(tag));
  }

  const dueReview = [];
  const fresh = [];
  for (const problem of candidates) {
    const progress = progressMap.get(problem.id);
    if (!progress || progress.attempts === 0) {
      fresh.push(problem);
      continue;
    }
    if (!progress.nextDueAt || parseTimestamp(progress.nextDueAt) <= now) {
      dueReview.push(problem);
    }
  }

  dueReview.sort((left, right) => {
    const leftDue = parseTimestamp(progressMap.get(left.id)?.nextDueAt || "") || new Date(0);
    const rightDue = parseTimestamp(progressMap.get(right.id)?.nextDueAt || "") || new Date(0);
    return leftDue - rightDue || left.id.localeCompare(right.id);
  });
  fresh.sort((left, right) => {
    const rank = { medium: 0, easy: 1, hard: 2 };
    return rank[left.difficulty] - rank[right.difficulty] || left.id.localeCompare(right.id);
  });

  const selected = [...dueReview.slice(0, reviewCount), ...fresh.slice(0, freshCount)];
  const wantedCount = reviewCount + freshCount;
  if (selected.length < wantedCount) {
    const chosen = new Set(selected.map((problem) => problem.id));
    const remaining = candidates
      .filter((problem) => !chosen.has(problem.id))
      .sort((left, right) => left.id.localeCompare(right.id))
      .slice(0, wantedCount - selected.length);
    selected.push(...remaining);
  }

  state.todayPlan = {
    date: new Date().toISOString().slice(0, 10),
    generatedAt: now.toISOString(),
    config: { review: reviewCount, fresh: freshCount, difficulty, tag },
    problemIds: selected.map((problem) => problem.id),
  };
}

function handlePlan(event) {
  event.preventDefault();
  const review = Math.max(0, Number.parseInt(document.getElementById("planReviewInput").value, 10) || 0);
  const fresh = Math.max(0, Number.parseInt(document.getElementById("planNewInput").value, 10) || 0);
  const difficulty = document.getElementById("planDifficultyInput").value.trim().toLowerCase();
  const tag = document.getElementById("planTagInput").value.trim().toLowerCase();
  if (!state.problems.length) {
    showStatus("No problems in bank. Add or import first.", "error");
    return;
  }
  generateTodayPlan(review, fresh, difficulty, tag);
  saveState();
  rerenderAll();
  showStatus(`Generated plan with ${state.todayPlan.problemIds.length} problems.`);
}

function handleAddColumn(event) {
  event.preventDefault();
  const column = sanitizeColumn({
    id: document.getElementById("columnIdInput").value,
    name: document.getElementById("columnNameInput").value,
    keywords: document.getElementById("columnKeywordsInput").value,
    problemIds: document.getElementById("columnProblemIdsInput").value,
    description: document.getElementById("columnDescriptionInput").value,
  });
  if (!column) {
    showStatus("Column id and name are required.", "error");
    return;
  }
  if (state.bank.columns.some((item) => item.id === column.id)) {
    showStatus(`Column id already exists: ${column.id}`, "error");
    return;
  }
  state.bank.columns.push(column);
  saveState();
  rerenderAll();
  event.target.reset();
  showStatus(`Added bank column: ${column.id}`);
}

function selectPhotoEntry(photoId) {
  photoRuntime.selectedPhotoId = photoId;
  renderPhotoInbox();
}

async function importPhotoFiles(fileList) {
  const files = Array.from(fileList || []).filter((file) => {
    return file.type.startsWith("image/") || /\.(png|jpe?g|webp|bmp|gif)$/i.test(file.name);
  });

  if (!files.length) {
    showStatus("No image file found in the selection.", "error");
    return;
  }

  const knownFingerprints = new Set(photoState.entries.map((entry) => entry.sourceFingerprint));
  let added = 0;
  let skipped = 0;
  photoRuntime.isImporting = true;
  showStatus(`Importing ${files.length} photo(s)...`);

  try {
    for (const file of files) {
      const fingerprint = buildPhotoFingerprint(file);
      if (knownFingerprints.has(fingerprint)) {
        skipped += 1;
        continue;
      }

      const { previewDataUrl } = await buildPreviewDataUrl(file);
      const entry = sanitizePhotoEntry({
        id: makePhotoId(),
        name: file.name,
        relativePath: file.webkitRelativePath || "",
        mimeType: file.type || "image/jpeg",
        size: file.size || 0,
        previewDataUrl,
        sourceFingerprint: fingerprint,
        linkedProblemId: "",
        status: "incoming",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      if (!entry) {
        skipped += 1;
        continue;
      }

      photoState.entries.unshift(entry);
      knownFingerprints.add(fingerprint);
      photoRuntime.selectedPhotoId = entry.id;
      added += 1;
    }

    photoState.entries.sort((left, right) => right.createdAt.localeCompare(left.createdAt));
    savePhotoState();
    renderPhotoInbox();
    showStatus(`Photo import done. added=${added}, skipped=${skipped}`);
  } catch (error) {
    photoState = loadPhotoState();
    photoRuntime.selectedPhotoId = photoState.entries[0]?.id || "";
    renderPhotoInbox();
    showStatus(`Photo import failed: ${error.message}`, "error");
  } finally {
    photoRuntime.isImporting = false;
  }
}

function handlePhotoImportChange(event) {
  importPhotoFiles(event.target.files);
  event.target.value = "";
}

function handlePhotoGridClick(event) {
  const card = event.target.closest("[data-photo-id]");
  if (!card) {
    return;
  }
  selectPhotoEntry(card.getAttribute("data-photo-id"));
}

function updateSelectedPhotoStatus(status) {
  const entry = choosePhotoSelection();
  if (!entry) {
    showStatus("Select a photo first.", "error");
    return;
  }
  updatePhotoEntry(entry.id, { status });
  renderPhotoInbox();
  showStatus(`Photo ${entry.name} moved to ${status}.`);
}

function handleDeleteSelectedPhoto() {
  const entry = choosePhotoSelection();
  if (!entry) {
    return;
  }
  if (!window.confirm(`Delete photo preview "${entry.name}" from the inbox?`)) {
    return;
  }
  removePhotoEntry(entry.id);
  renderPhotoInbox();
  showStatus(`Deleted photo preview: ${entry.name}`);
}

function buildPhotoImportedDescription(photoEntry, existingProblem) {
  if (existingProblem?.description) {
    return existingProblem.description;
  }
  return [
    "Imported from photo inbox.",
    `Photo file: ${photoEntry.relativePath || photoEntry.name}`,
    "",
    "TODO: fill in the statement from the screenshot.",
  ].join("\n");
}

function handlePhotoCreateProblem(event) {
  event.preventDefault();
  const entry = choosePhotoSelection();
  if (!entry) {
    showStatus("Select a photo first.", "error");
    return;
  }

  const linkedProblem = getPhotoLinkedProblem(entry);
  const problemId = dom.photoProblemIdInput.value.trim();
  const title = dom.photoProblemTitleInput.value.trim();
  const difficulty = dom.photoProblemDifficultyInput.value.trim().toLowerCase();
  const tags = dom.photoProblemTagsInput.value.trim();

  if (!problemId || !title) {
    showStatus("Problem ID and title are required.", "error");
    return;
  }

  const existingProblem = getProblemById(problemId);
  if (existingProblem && (!linkedProblem || existingProblem.id !== linkedProblem.id)) {
    showStatus(`Problem id already exists: ${problemId}`, "error");
    return;
  }

  const problem = sanitizeProblem({
    id: problemId,
    title,
    difficulty,
    tags,
    source: "\u53ef\u4fe1\u8003\u8bd5",
    description: buildPhotoImportedDescription(entry, existingProblem || linkedProblem),
    editorMode: existingProblem?.editorMode || linkedProblem?.editorMode || "full_program",
    starterCode: existingProblem?.starterCode || linkedProblem?.starterCode || "",
    sampleInput: existingProblem?.sampleInput || linkedProblem?.sampleInput || "",
    sampleOutput: existingProblem?.sampleOutput || linkedProblem?.sampleOutput || "",
    solutionEntry: existingProblem?.solutionEntry || linkedProblem?.solutionEntry || "",
    runnerTemplate: existingProblem?.runnerTemplate || linkedProblem?.runnerTemplate || "",
    createdAt: existingProblem?.createdAt || linkedProblem?.createdAt || new Date().toISOString(),
  });

  if (!problem) {
    showStatus("Invalid problem record.", "error");
    return;
  }

  upsertProblem(problem, true);
  updatePhotoEntry(entry.id, { linkedProblemId: problem.id, status: "processed" });
  state.compiler.selectedProblemId = problem.id;
  ensureCompilerSelection();
  saveState();
  rerenderAll();
  showStatus(`Problem record ready: ${problem.id}`);
  dom.compilerProblemSelect.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleOpenProblemFromPhoto() {
  const entry = choosePhotoSelection();
  const linkedProblem = getPhotoLinkedProblem(entry);
  if (!linkedProblem) {
    showStatus("This photo is not linked to a problem yet.", "error");
    return;
  }
  syncCompilerSelection(linkedProblem.id);
  setRunState("idle", "Idle", `Loaded ${linkedProblem.id}. Ready to compile.`);
  dom.compilerProblemSelect.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleCompilerProblemChange() {
  const problemId = dom.compilerProblemSelect.value;
  if (!problemId) {
    return;
  }
  syncCompilerSelection(problemId);
  setRunState("idle", "Idle", "Problem loaded. Ready to compile.");
}

function handleResetCode() {
  const problem = ensureCompilerSelection();
  if (!problem) {
    return;
  }
  setCompilerDraft(problem.id, defaultStarterCode(problem));
  saveState();
  renderCompiler();
  showStatus(`Reset code for ${problem.id}.`);
}

function handleFillSampleInput() {
  const problem = ensureCompilerSelection();
  if (!problem) {
    return;
  }
  setCompilerInput(problem.id, problem.sampleInput || "");
  saveState();
  renderCompiler();
  showStatus(`Loaded sample input for ${problem.id}.`);
}

function handleDownloadFrame() {
  const problem = ensureCompilerSelection();
  if (!problem) {
    return;
  }
  downloadFullFrameForProblem(problem);
  showStatus(`Downloaded full frame for ${problem.id}.`);
}

function handleCompilerBufferInput() {
  const problem = ensureCompilerSelection();
  if (!problem) {
    return;
  }
  setCompilerDraft(problem.id, getSourceBufferValue());
  setCompilerInput(problem.id, getInputBufferValue());
  saveState();
}

function handleProblemTableClick(event) {
  const button = event.target.closest("[data-open-compiler]");
  if (!button) {
    return;
  }
  const problemId = button.getAttribute("data-open-compiler");
  if (!problemId) {
    return;
  }
  syncCompilerSelection(problemId);
  setRunState("idle", "Idle", `Loaded ${problemId}. Ready to compile.`);
  dom.compilerProblemSelect.scrollIntoView({ behavior: "smooth", block: "center" });
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportData() {
  snapshotCompilerBuffers();
  const stamp = new Date().toISOString().replaceAll(":", "-").replaceAll(".", "-");
  const payload = {
    ...state,
    photoInbox: photoState,
  };
  downloadFile(
    `trusted-exam-practice-export-${stamp}.json`,
    JSON.stringify(payload, null, 2),
    "application/json"
  );
  showStatus("Exported all local data.");
}

function downloadTemplate() {
  const template = [
    "id,title,difficulty,tags,url,source",
    "KX-001,[软件认证] 磁盘空间统计,medium,array|prefix sum|sliding window,,可信考试",
    "KX-002,[软件认证] 字符排序,medium,string|sorting|simulation,,可信考试",
    "KX-003,[软件认证] 比特翻转,medium,array|sliding window|binary,,可信考试",
    "KX-004,[软件认证] 最佳升级时间窗,medium,array|sliding window|prefix sum|circular array,,可信考试",
    "KX-005,[软件认证] 表达式计算,medium,stack|string|expression,,可信考试",
    "KX-006,[软件认证] 信号解码,medium,string|stack|expression,,可信考试",
    "KX-007,[软件认证] 挑选礼物,medium,queue|stack|simulation,,可信考试",
    "KX-008,[软件认证] 单板告警统计,medium,set|sorting|string,,可信考试",
    "KX-009,[软件认证] 话单发送,medium,greedy|sorting|array,,可信考试",
    "KX-010,[软件认证] 呼叫转移,medium,string|simulation|hash table,,可信考试",
    "KX-011,[软件认证] 遥控小车,easy,simulation|array|geometry,,可信考试",
    "KX-012,[软件认证] 单词统计,medium,string|simulation|parsing,,可信考试",
    "KX-013,[软件认证] 矩阵列的最大值中的最小值,easy,matrix|array|simulation,,可信考试",
    "KX-014,[软件认证] 公共字符,medium,string|hash table|counting,,可信考试",
    "KX-015,[软件认证] 给定差值的组合,easy,array|hash table|counting,,可信考试",
    "KX-016,[软件认证] 三子连线,easy,geometry|simulation|brute force,,可信考试",
    "KX-017,[考试真题2] 命令的最短唯一前缀,easy,string|prefix|simulation|brute force,,考试真题2",
    "KX-018,[考试真题] 所有连续子数组的中位数之和,medium,array|sorting|median|simulation,,考试真题",
    "LC-15,3Sum,medium,array|two pointers,https://leetcode.com/problems/3sum/,leetcode",
    "LC-56,Merge Intervals,medium,array|sorting|interval,https://leetcode.com/problems/merge-intervals/,leetcode",
  ].join("\n");
  downloadFile("trusted-exam-problems-template.csv", template, "text/csv");
}

function resetLocalData() {
  if (!window.confirm("Reset all local data in this browser?")) {
    return;
  }
  state = defaultState();
  photoState = defaultPhotoState();
  photoRuntime.selectedPhotoId = "";
  ensureBuiltinProblems();
  ensureCompilerSelection();
  saveState();
  savePhotoState();
  rerenderAll();
  showStatus("Local data has been reset.");
}

function loadDemoData() {
  if (!window.confirm("Load demo data and replace current local state?")) {
    return;
  }
  state = defaultState();
  photoState = defaultPhotoState();
  photoRuntime.selectedPhotoId = "";
  ensureBuiltinProblems();
  for (const item of DEMO_PROBLEMS) {
    const problem = sanitizeProblem(item);
    if (problem) {
      upsertProblem(problem, false);
    }
  }
  ensureCompilerSelection();
  saveState();
  savePhotoState();
  rerenderAll();
  showStatus("Demo data loaded.");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const ch = text[index];
    const next = text[index + 1];
    if (ch === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === "," && !inQuotes) {
      row.push(current);
      current = "";
      continue;
    }
    if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && next === "\n") {
        index += 1;
      }
      row.push(current);
      current = "";
      if (row.some((cell) => cell.trim().length > 0)) {
        rows.push(row);
      }
      row = [];
      continue;
    }
    current += ch;
  }

  if (current.length > 0 || row.length > 0) {
    row.push(current);
    if (row.some((cell) => cell.trim().length > 0)) {
      rows.push(row);
    }
  }

  if (!rows.length) {
    return [];
  }

  const headers = rows[0].map((header) => header.trim().toLowerCase());
  return rows.slice(1).map((cells) => {
    const result = {};
    headers.forEach((header, index) => {
      result[header] = String(cells[index] || "").trim();
    });
    return result;
  });
}

function mergeImportedProblems(rows, updateExisting) {
  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const row of rows) {
    const problem = sanitizeProblem(row);
    if (!problem) {
      skipped += 1;
      continue;
    }
    const result = upsertProblem(problem, updateExisting);
    if (result.created) {
      created += 1;
    } else if (result.updated) {
      updated += 1;
    } else {
      skipped += 1;
    }
  }

  const validProblemIds = new Set(state.problems.map((problem) => problem.id));
  state.attempts = state.attempts.filter((attempt) => validProblemIds.has(attempt.problemId));
  state.compiler = sanitizeCompilerState(state.compiler, new Map(state.problems.map((p) => [p.id, p])));
  ensureCompilerSelection();
  return { created, updated, skipped };
}

async function importFromFile() {
  const file = dom.importFileInput.files?.[0];
  if (!file) {
    showStatus("Choose a .csv or .json file first.", "error");
    return;
  }

  const updateExisting = dom.importUpdateCheck.checked;
  const text = await file.text();

  try {
    if (file.name.toLowerCase().endsWith(".csv")) {
      const result = mergeImportedProblems(parseCsv(text), updateExisting);
      ensureBuiltinProblems();
      saveState();
      rerenderAll();
      showStatus(
        `Import done. created=${result.created}, updated=${result.updated}, skipped=${result.skipped}`
      );
      return;
    }

    if (!file.name.toLowerCase().endsWith(".json")) {
      showStatus("Only .csv and .json are supported.", "error");
      return;
    }

    const payload = JSON.parse(text);
    if (Array.isArray(payload)) {
      const result = mergeImportedProblems(payload, updateExisting);
      ensureBuiltinProblems();
      saveState();
      rerenderAll();
      showStatus(
        `Import done. created=${result.created}, updated=${result.updated}, skipped=${result.skipped}`
      );
      return;
    }

    if (!payload || typeof payload !== "object") {
      showStatus("Invalid JSON payload.", "error");
      return;
    }

    if (Array.isArray(payload.problems)) {
      const result = mergeImportedProblems(payload.problems, updateExisting);
      if (Array.isArray(payload.attempts)) {
        state.attempts = payload.attempts
          .map(sanitizeAttempt)
          .filter(Boolean)
          .filter((attempt) => state.problems.some((problem) => problem.id === attempt.problemId))
          .sort((left, right) => left.timestamp.localeCompare(right.timestamp));
      }
      if (payload.bank && Array.isArray(payload.bank.columns)) {
        const columns = payload.bank.columns.map(sanitizeColumn).filter(Boolean);
        if (columns.length) {
          state.bank.columns = columns;
        }
      }
      if (payload.compiler && typeof payload.compiler === "object") {
        state.compiler = sanitizeCompilerState(
          payload.compiler,
          new Map(state.problems.map((problem) => [problem.id, problem]))
        );
      }
      if (payload.photoInbox && typeof payload.photoInbox === "object") {
        photoState = sanitizePhotoState(payload.photoInbox);
        photoRuntime.selectedPhotoId = photoState.entries[0]?.id || "";
        savePhotoState();
      }
      ensureBuiltinProblems();
      ensureCompilerSelection();
      saveState();
      rerenderAll();
      showStatus(
        `Import done. created=${result.created}, updated=${result.updated}, skipped=${result.skipped}`
      );
      return;
    }

    showStatus("JSON must be an array of problems or an object containing 'problems'.", "error");
  } catch (error) {
    showStatus(`Import failed: ${error.message}`, "error");
  }
}

function bindEvents() {
  dom.addProblemForm.addEventListener("submit", handleAddProblem);
  dom.recordAttemptForm.addEventListener("submit", handleRecordAttempt);
  dom.planForm.addEventListener("submit", handlePlan);
  dom.addColumnForm.addEventListener("submit", handleAddColumn);
  dom.photoImportInput.addEventListener("change", handlePhotoImportChange);
  dom.photoFolderInput.addEventListener("change", handlePhotoImportChange);
  dom.photoInboxGrid.addEventListener("click", handlePhotoGridClick);
  dom.photoMarkIncomingButton.addEventListener("click", () => updateSelectedPhotoStatus("incoming"));
  dom.photoMarkProcessedButton.addEventListener("click", () => updateSelectedPhotoStatus("processed"));
  dom.photoArchiveButton.addEventListener("click", () => updateSelectedPhotoStatus("archived"));
  dom.photoOpenProblemButton.addEventListener("click", handleOpenProblemFromPhoto);
  dom.photoDeleteButton.addEventListener("click", handleDeleteSelectedPhoto);
  dom.photoCreateProblemForm.addEventListener("submit", handlePhotoCreateProblem);
  dom.compilerProblemSelect.addEventListener("change", handleCompilerProblemChange);
  dom.fillSampleInputButton.addEventListener("click", handleFillSampleInput);
  dom.resetCodeButton.addEventListener("click", handleResetCode);
  dom.downloadFrameButton.addEventListener("click", handleDownloadFrame);
  dom.runCodeButton.addEventListener("click", runCurrentCode);
  dom.compilerSplitter?.addEventListener("pointerdown", handleCompilerSplitterPointerDown);
  dom.compilerSplitter?.addEventListener("keydown", handleCompilerSplitterKeyDown);
  window.addEventListener("pointermove", handleCompilerSplitterPointerMove);
  window.addEventListener("pointerup", handleCompilerSplitterPointerUp);
  window.addEventListener("pointercancel", handleCompilerSplitterPointerUp);
  window.addEventListener("resize", applyCompilerLayout);
  if (hasRichEditors()) {
    editorRuntime.source.session.on("change", handleCompilerBufferInput);
    editorRuntime.stdin.session.on("change", handleCompilerBufferInput);
  } else {
    dom.sourceCodeInput.addEventListener("input", handleCompilerBufferInput);
    dom.stdinInput.addEventListener("input", handleCompilerBufferInput);
  }
  dom.problemTableBody.addEventListener("click", handleProblemTableClick);

  dom.importButton.addEventListener("click", () => {
    importFromFile();
  });
  dom.exportButton.addEventListener("click", exportData);
  dom.downloadTemplateButton.addEventListener("click", downloadTemplate);
  dom.resetButton.addEventListener("click", resetLocalData);
  dom.loadDemoButton.addEventListener("click", loadDemoData);

  const filterInputs = [
    dom.searchInput,
    dom.filterDifficultyInput,
    dom.filterTagInput,
    dom.filterColumnInput,
  ];
  for (const input of filterInputs) {
    input.addEventListener("input", () => renderProblemTable(buildProgressMap()));
    input.addEventListener("change", () => renderProblemTable(buildProgressMap()));
  }
}

function boot() {
  state = sanitizeState(state);
  photoState = sanitizePhotoState(photoState);
  photoRuntime.selectedPhotoId = photoState.entries[0]?.id || "";
  ensureBuiltinProblems();
  ensureCompilerSelection();
  saveState();
  savePhotoState();
  initializeEditors();
  applyCompilerLayout();
  bindEvents();
  rerenderAll();
  showStatus("Ready.");
}

boot();
