// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=ts"
// @generated from file example/v1/other.proto (package example.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {OtherRequest, OtherResponse} from "./other_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service example.v1.OtherService
 */
export const OtherService = {
  typeName: "example.v1.OtherService",
  methods: {
    /**
     * @generated from rpc example.v1.OtherService.Other
     */
    other: {
      name: "Other",
      I: OtherRequest,
      O: OtherResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

