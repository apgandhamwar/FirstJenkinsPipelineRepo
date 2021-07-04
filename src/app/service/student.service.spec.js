"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var student_service_1 = require("./student.service");
var http_1 = require("@angular/common/http");
describe('StudentService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [student_service_1.StudentService],
            imports: [
                http_1.HttpClientModule
            ],
        });
        service = testing_1.TestBed.inject(student_service_1.StudentService);
    });
    it('should be created', testing_1.inject([student_service_1.StudentService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=student.service.spec.js.map